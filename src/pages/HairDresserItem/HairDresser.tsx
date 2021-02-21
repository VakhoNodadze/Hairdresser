import React, { FC, useState } from 'react';
import { withTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { Radio } from 'antd';
import { useForm, Controller } from 'react-hook-form';

import { ThemeProps } from 'styled/themes';
import { useHistory, useParams } from 'react-router-dom';
import hairdressers from 'redux/Hairdressers';
import Flex from 'atoms/Flex';
import Text from 'atoms/Text';
import Button from 'atoms/Button';
import { List, ListItem } from 'molecules/List';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/ducks';
import { addDresser } from 'redux/ducks/userInfo';
import { chosenDresser } from 'redux/ducks/userInfo';
import { REGISTERPAYLOAD } from 'redux/ducks/authorization';
import Input from 'atoms/Input/Input';

interface Props extends ThemeProps{}

interface RouteParamsType {
    id: string;
}

interface IFormInput {
    score: number;
    comment: string;
}
const HairDresserItem: FC <Props> = ({ theme }) => {
  const { register, handleSubmit,control } = useForm<IFormInput>();
    
  const chosenDressers = useSelector<AppState, string[]>((state) => state.chooseDresser.chosenDressers);
  const users = useSelector<AppState, REGISTERPAYLOAD[]>((state) => state.register.users);
  const { id } = useParams<RouteParamsType>();
  const { replace } = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data: IFormInput) => console.log(data);

  const orderHandler = () => {
    replace('/hairdressers');
    const orderedHairdresser = users.find((user) => user.id === id);
    dispatch(addDresser(id));
  };

  const hairdresser = hairdressers.find((dresser) => dresser.id === id)!;

  const renderReviewAbility = () => (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text>Give your review</Text>
      <Flex direction='column'>
        <Flex>
          {[...Array(10)].map((_, index) => (
            <>
              <input key={index} type="radio" name="score" value={index + 1} ref={register} />{index + 1}
            </>
          ))}
        </Flex>
      </Flex>
      <Controller
        name='comment'
        control={control}
        defaultValue=''
        as={() => {
          return <Input bg='rgb(246, 249, 252)' name='comment' fontSize='lg' p={theme.space.tiny} register={register}
            width='75%' />;
        }}
      />
      <Button>
            Submit Review
      </Button>
    </form>
  );

  return (
    <Flex width='100%' align='center' mt={theme.space.xLarge} direction='column'>
      <Flex direction='column' align='start' width='50%' m='auto'>
        <Text fontSize='xxxl' my={theme.space.default}>Review {hairdresser.firstName}</Text>
        <Text fontSize='xxl' my={theme.space.default}>His price is: {hairdresser.price}</Text>
      </Flex>
      <Flex width='50%' m='auto'>
        <List>
          {hairdresser.review.map((review, index) => (
            <ListItem my={theme.space.field} key={index}>
              <Text>Score: {review.score}/10</Text>
              <Text>Comment: {review.comment}</Text>
            </ListItem>
          ))}
        </List>
      </Flex>
      {renderReviewAbility()}
      <Button onClick={() => orderHandler()}>
            Order
      </Button>
    </Flex>
  );
};

export default withTheme(HairDresserItem);