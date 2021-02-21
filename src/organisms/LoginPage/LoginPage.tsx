import React, { useEffect, useState } from 'react';
import { Button, Row } from 'antd';

import { Text } from 'components/styles';
import { LoginPageStyled, ToggleNewUserStyled } from './LoginPage.styled';
import images from 'assets/image';
import Lock from 'assets/image/svg/lock.svg';
import AuthInput from '../../components/AuthInput';
import { Controller } from 'react-hook-form';
import { BaseCheckbox, BaseSecondaryButton } from 'components/baseComponents';
import LoaderLine from 'components/common/LoaderLine';
import useLogin from './useLogin';

const LoginPage = () => {
  const {
    fontFamilies,
    user,
    loading,
    onSubmit,
    handleSubmit,
    control,
    errors,
    useNewUser,
    onUseDifferentAccount,
    onForgotPasswordSubmit,
  } = useLogin();

  const [isForgotPassScreen, setIsForgotPassScreen] = useState<boolean>(false);

  useEffect(() => {}, []);

  const renderLoginScreen = () => (
    <>
      <Row align={'middle'} className={'top-content'}>
        <div className={'content__image-container flex flex-center'}>
          <img src={images.FRTLogo} />
        </div>
        <ToggleNewUserStyled
          useNewUser={useNewUser}
          className={'content__email-and-user'}
        >
          <div className={'email active'}>
            <Controller
              control={control}
              name={'email'}
              as={AuthInput}
              defaultValue={''}
              label={'Email or Username'}
              type={'email'}
              error={errors['email']}
            />
          </div>
          <div className={'user'}>
            <Text
              color={'#000000'}
              fontSize={24}
              fontFamily={fontFamilies.semiBold}
            >
              Welcome back {user?.first_name}
            </Text>
            <Button
              type={'text'}
              onClick={onUseDifferentAccount}
              className={'user__btn-use-different'}
            >
              Use another account
            </Button>
          </div>
        </ToggleNewUserStyled>
        <div className={'content__password'}>
          <Controller
            control={control}
            name={'password'}
            as={AuthInput}
            defaultValue={''}
            rules={{ required: true }}
            label={'Password'}
            type={'password'}
            error={errors['password']}
          />
          <Button
            type={'text'}
            onClick={() => setIsForgotPassScreen((prev) => !prev)}
            className={'password__forgot'}
          >
            Forgotten password
          </Button>
        </div>
      </Row>
      <LoaderLine loading={loading} />
      <Row
        align={'middle'}
        justify={'end'}
        className={'content__submit-container'}
      >
        <Controller
          control={control}
          name={'stayLoggedIn'}
          as={BaseCheckbox}
          defaultValue={false}
          label={'Stay Logged In'}
          type={'checkbox'}
        />
        <BaseSecondaryButton
          title={'Log in'}
          className={'btn--fill'}
          backgroundColor={'#5C5BC1'}
          htmlType={'submit'}
        />
      </Row>
    </>
  );

  const testFunc = () => {
    console.log('fff');
  };
  const renderForgotPasswordScreen = () => (
    <>
      <Row align={'middle'} className={'top-content'}>
        <div className={'content__image-container flex flex-center'}>
          <img src={Lock} />
        </div>
        <ToggleNewUserStyled
          useNewUser={useNewUser}
          className={'content__email-and-user'}
        >
          <div className={'user'}>
            <Text
              color={'#000000'}
              fontSize={32}
              fontFamily={fontFamilies.semiBold}
            >
              Reset password
            </Text>
          </div>
        </ToggleNewUserStyled>
        <div className={'content__password'}>
          <Controller
            control={control}
            name={'email'}
            as={AuthInput}
            defaultValue={''}
            rules={{ required: true }}
            label={'Enter your email'}
            type={'text'}
            error={errors['email']}
          />
        </div>
      </Row>
      <LoaderLine loading={loading} />
      <Row
        align={'middle'}
        justify={'end'}
        className={'content__submit-container'}
      >
        <Text
          color={'#000000'}
          fontSize={16}
          fontFamily={fontFamilies.semiBold}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => setIsForgotPassScreen((prev) => !prev)}
        >
          Go Back to Login
        </Text>
        <BaseSecondaryButton
          title={'Submit'}
          className={'btn--fill'}
          backgroundColor={'#5C5BC1'}
          htmlType={'submit'}
        />
      </Row>
    </>
  );

  return (
    <LoginPageStyled onSubmit={handleSubmit(testFunc)}>
      {isForgotPassScreen ? renderForgotPasswordScreen() : renderLoginScreen()}
    </LoginPageStyled>
  );
};

export default LoginPage;
