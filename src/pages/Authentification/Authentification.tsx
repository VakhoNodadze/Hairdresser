import React, { FC, Fragment } from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';

import Text from 'atoms/Text';
import Bg from 'assets/images/storyHubBgr.jpg';
import { LayoutWrapperStyled, LoginRegisterWrapperStyled } from './Authentification.styled';
import LoginPage from 'organisms/LoginPage';
import RegisterPage from 'organisms/RegisterPage';
import TabBarHeader from 'molecules/TabHeader';

const Authentication = () => {
  return (
    <LayoutWrapperStyled $backgroundImage={Bg}>
      <Layout className={'content-wrapper'}>
        <div className={'login__top-text'}>
          <Text
            color='white'
            fontSize={'xl'}
            lineHeight={32}
          >
              Cut your hair with the best barbers!
          </Text>
        </div>
        <Switch>
          <Redirect exact from={'/'} to={'/auth/login'} />
          <Route
            exact
            path={'/auth/:authType(login|register)'}
            render={() => {
              return (
                <LoginRegisterWrapperStyled>
                  <TabBarHeader />
                  <div className={'auth-white-wrapper'}>
                    <Switch>
                      <Route
                        exact
                        path={'/auth/:authType(login)'}
                        component={LoginPage}
                      />
                      <Route
                        exact
                        path={'/auth/:authType(register)'}
                        component={RegisterPage}
                      />
                    </Switch>
                  </div>
                </LoginRegisterWrapperStyled>
              );
            }}
          />
        </Switch>
        {/*<LoginRegisterWrapperStyled>*/}
        {/*  <TabBarHeader />*/}
        {/*  <div className={'auth-white-wrapper'}>*/}
        {/*    <LoginPage />*/}
        {/*  </div>*/}
        {/*</LoginRegisterWrapperStyled>*/}
      </Layout>
    </LayoutWrapperStyled>
  );
};

export default Authentication;