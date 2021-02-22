import React, { FC } from 'react';
import { withTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams, Link } from 'react-router-dom';

import { ThemeProps } from 'styled/themes';
import Flex from 'atoms/Flex';
import Text from 'atoms/Text';
import Button from 'atoms/Button';
import { List, ListItem } from 'molecules/List';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/ducks';
import { addDresser } from 'redux/ducks/chosenDressers';
import { REGISTERPAYLOAD, updateReview } from 'redux/ducks/hairdressers';
import { message } from 'antd';


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

  const onSubmit = (data: IFormInput) => {
    const userId = localStorage.getItem('userId');
    if(!userId) {
      message.error('You are not authorized');
      replace('/auth/login');
    }
    else {
      dispatch(updateReview({ id, review: data }));
      message.success('Review Added');
    }
  };

  const orderHandler = () => {
    const userId = localStorage.getItem('userId');
    if(!userId){
      message.error('You are not authorized');
      replace('/auth/login');
    }else{
      replace('/hairdressers');
      dispatch(addDresser(id));
      message.success('Hairdresser Chosen. You now review them');
    }
  };

  const hairdresser = users.find((dresser) => dresser.id === id)!;

  const renderReviewAbility = () => (
    <Flex width='50%' m='auto'>
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
            return <textarea
              name='comment'
              ref={register}
              style={{ height: '100%', width: '100%', padding: '5px', resize: 'none', fontSize: '18px' }} />;
          }}
        />
        <Button>
                  Submit Review
        </Button>
      </form>
    </Flex>
  );

  return (
    <Flex width='100%' align='center' mt={theme.space.xLarge} direction='column'>
      <Flex width='50%' m='auto' mb={theme.space.mid} style={{ alignSelf: 'flex-start' }}>
        <Link to='/hairdressers'>
          <Text fontSize='xl' color='red400'>Go back</Text>
        </Link>
      </Flex>
      <Flex direction='column' align='start' width='50%' m='auto'>
        <Text fontSize='xxxl' my={theme.space.default}>Review {hairdresser.firstName}</Text>
        <Text fontSize='xxl' my={theme.space.default}>His price is: {hairdresser.price}</Text>
      </Flex>
      <Flex width='50%' m='auto'>
        <List>
          {hairdresser.review?.map((review, index) => (
            <ListItem my={theme.space.field} key={index}>
              <Text>Score: {review.score}/10</Text>
              <Text>Comment: {review.comment}</Text>
            </ListItem>
          ))}
        </List>
      </Flex>
      {chosenDressers.find((dresser) => dresser === id) ? renderReviewAbility() : null}
      <Button onClick={() => orderHandler()}>
            Order
      </Button>
    </Flex>
  );
};

export default withTheme(HairDresserItem);