import React, { FC, Fragment } from 'react';
import Flex from 'atoms/Flex';
import Text from 'atoms/Text';
import { Grid, GridItem } from 'atoms/Grid';
import Input from 'atoms/Input';

import { LayoutWrapperStyled, LoginRegisterWrapperStyled } from './Authentification.styled';

const Authentication = () => {
  return (
    <LayoutWrapperStyled $backgroundImage={images.storyHubBgr}>
      <Layout className={'content-wrapper'}>
        <div className={'login__top-text'}>
          <Text
            color={'#fff'}
            fontSize={24}
            fontFamily={fontFamilies.bold}
            lineHeight={32}
          >
              Story telling for businesses
          </Text>
          <Title.H2 color={'#fff'} fontSize={72}>
              Let your story begin!
          </Title.H2>
        </div>
        <Switch>
          <Redirect exact from={'/auth'} to={'/auth/login'} />
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
                        component={LoginPageLazy}
                      />
                      <Route
                        exact
                        path={'/auth/:authType(register)'}
                        component={RegistrationPageLazy}
                      />
                    </Switch>
                  </div>
                </LoginRegisterWrapperStyled>
              );
            }}
          />

          <Route
            exact
            path={'/auth/add-company'}
            component={AddCompanyPageLazy}
          />
          <Route
            exact
            path={'/auth/invite-users'}
            component={InviteUsersPageLazy}
          />
          <Redirect to={'/auth/login'} />
        </Switch>
      </Layout>
    </LayoutWrapperStyled>
  );
};

export default Authentication;