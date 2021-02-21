import React, { FC, Fragment } from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';

import Flex from 'atoms/Flex';
import Text from 'atoms/Text';

import Bg from 'assets/images/storyHubBgr.jpg';

import { Grid, GridItem } from 'atoms/Grid';
import Input from 'atoms/Input';
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
              Story telling for businesses
          </Text>
          <Text color='white' fontSize='xxl'>
              Let your story begin!
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