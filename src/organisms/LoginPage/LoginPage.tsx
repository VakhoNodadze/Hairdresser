import React, { FC, useEffect, useState } from 'react';
import { Button, Row } from 'antd';
import { withTheme } from 'styled-components';
import { ThemeProps } from 'styled/themes';
import { Controller } from 'react-hook-form';

import Text from 'atoms/Text';
import Input from 'atoms/Input';
import { LoginPageStyled, ToggleNewUserStyled } from './LoginPage.styled';
import Flex from '../../atoms/Flex';
import useLogin from './useLogin';

interface Props extends ThemeProps{}

const LoginPage: FC <Props> = ({ theme }) => {
  const {
    fontFamilies,
    loading,
    onSubmit,
    handleSubmit,
    control,
    errors,
    register
  } = useLogin();

  const renderLoginScreen = () => (
    <>
      <Row align={'middle'} className={'top-content'}>
        <div className={'flex'}>
          <div className={'email active'}>
            <Text>Phone Number</Text>
            <Controller
              name='phoneNumber'
              control={control}
              as={() => {
                return <Input bg='rgb(246, 249, 252)' name='phoneNumber' fontSize='lg' p={theme.space.tiny}
                  register={register} width='75%' />;
              }}
            />
          </div>
          <div className={'content__password'}>
            <Text>Password</Text>
            <Controller
              name='password'
              control={control}
              as={() => {
                return <Input bg='rgb(246, 249, 252)' name='password' fontSize='lg' p={theme.space.tiny} register={register}
                  width='75%' />;
              }}
            />
          </div>
        </div>
      </Row>
      <Row
        align={'middle'}
        justify={'end'}
        className={'content__submit-container'}
      >
        <button type='submit'>
          Log in
        </button>
      </Row>
    </>
  );


  return (
    <LoginPageStyled onSubmit={handleSubmit(onSubmit)}>
      {renderLoginScreen()}
    </LoginPageStyled>
  );
};

export default withTheme(LoginPage);
