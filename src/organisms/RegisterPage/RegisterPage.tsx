import React, { FC, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { withTheme } from 'styled-components';
import { ThemeProps } from 'styled/themes';
import { Controller } from 'react-hook-form';

import { RegistrationPageStyled } from './RegisterPage.styled';
import Text from 'atoms/Text';
import Flex from 'atoms/Flex';
import Input from 'atoms/Input';
import useRegister from './useRegister';

import cuntries from './Countries';

interface Props extends ThemeProps{}

const RegistrationPage: FC <Props> = ({ theme }): React.ReactElement => {

  const {
    loading,
    control,
    handleSubmit,
    onSubmit,
    setValue,
    watch,
    errors,
    fieldData,
    register,
    registerHairdresser,
    registerClient,
    registerAddresser
  } = useRegister();

  const [phonesArray, setPhonesArray] = useState<SelectItemType[]>([{ value: '', label: '' }]);

  useEffect(() => {
    const items: SelectItemType[] =
        cuntries.map(({ phonecode }) => ({
          label: phonecode?.toString(),
          value: phonecode?.toString()
        })) ?? [];
    // @ts-ignore
    setPhonesArray(items);
  }, []);

  const renderHairdresserRegister = () => (
    <>
      <Flex direction='column'>
        <Flex justify='between' width='70%' margin='auto' my={theme.space.tiny}>
          <Text fontSize='xs'>
                      Please Enter your phone number
          </Text>
          <Flex justify='between' width='50%'>
            {/*<select style={{ width: '20%' }} defaultValue='995' name='countryCode' register={register}>*/}
            {/*  {*/}
            {/*    phonesArray.map((option, index) => (*/}
            {/*      <option key={option.value}>+{option.value}</option>*/}
            {/*    ))*/}
            {/*  }*/}
            {/*</select>*/}
            <Controller
              name='phoneNumber'
              control={control}
              defaultValue=''
              as={() => {
                return <Input bg='rgb(246, 249, 252)' name='phoneNumber' fontSize='lg' p={theme.space.tiny} register={register}
                  width='75%' />;
              }}
            />
          </Flex>
        </Flex>
        <Flex justify='between' width='70%' margin='auto' my={theme.space.tiny}>
          <Text fontSize='xs' >
                  Please Enter your First Name
          </Text>
          <Controller
            name='firstName'
            control={control}
            defaultValue=''
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='firstName' fontSize='lg' p={theme.space.tiny} register={register}
                width='75%' />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' my={theme.space.tiny}>
          <Text fontSize='xs' >
                  Please Enter your Last Name
          </Text>
          <Controller
            name='lastName'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='lastName' fontSize='lg' p={theme.space.tiny} register={register}
                width='75%' />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' my={theme.space.tiny}>
          <Text fontSize='xs' >
                  Please Enter your Price
          </Text>
          <Controller
            name='price'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='price' fontSize='lg' p={theme.space.tiny} register={register}
                width='75%' />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' my={theme.space.tiny}>
          <Text fontSize='xs' >
                  Please Enter your password
          </Text>
          <Controller
            name='password'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='password' fontSize='lg' p={theme.space.tiny} register={register}
                width='75%' type='password' />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' my={theme.space.tiny}>
          <Text fontSize='xs' >
                 Confirm your password
          </Text>
          <Controller
            defaultValue=''
            name='passwordConfirmation'
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='passwordConfirmation' fontSize='lg' p={theme.space.tiny} register={register}
                width='75%' type='password' />;
            }}
          />
        </Flex>
      </Flex>
    </>
  );

  const renderClientRegister = () => (
    <>
      <Flex direction='column'>
        <Flex justify='between' width='50%'>
          {/*<select style={{ width: '20%' }} defaultValue='995' name='countryCode'>*/}
          {/*  {*/}
          {/*    phonesArray.map((option, index) => (*/}
          {/*      <option key={option.value}>+{option.value}</option>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*</select>*/}
        </Flex>
        <Flex>
          <Text fontSize='xs'>
                    Please Enter your password
          </Text>
          <Controller
            name='password'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='password' fontSize='lg' p={theme.space.tiny} register={register}
                width='75%' type='password' />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' my={theme.space.tiny}>
          <Text fontSize='xs' >
                  Confirm your password
          </Text>
          <Controller
            name='passwordConfirmation'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='passwordConfirmation' fontSize='lg' p={theme.space.tiny} register={register}
                width='75%' type='password' />;
            }}
          />
        </Flex>
      </Flex>
    </>
  );

  return (
    <RegistrationPageStyled onSubmit={handleSubmit(onSubmit)}>
      <Col span={24} className={'content__form-container'}>
      </Col>
      <Row
        align={'middle'}
        justify={'end'}
        className={'content__submit-container'}
      >
        <Flex width='50%' mx='auto' justify='between' mb={theme.space.large}>
          <Text style={{ cursor: 'pointer' }} onClick={registerClient}>
              Register as <Text color='blue200' display='inline' span>
              Client</Text>
          </Text>
          <Text style={{ cursor: 'pointer' }} onClick={registerHairdresser}>
              Register as <Text color='blue200' display='inline' span>
              Hairdresser
            </Text>
          </Text>
        </Flex>
        {registerAddresser === 'client' ? renderClientRegister() : renderHairdresserRegister()}
        <button>
              Submit
        </button>
      </Row>
    </RegistrationPageStyled>
  );
};

export default withTheme(RegistrationPage);
