import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabBarHeaderStyled } from './TabHeader.styled';

type RouteParamsType = {
    authType: 'login' | 'register';
};
const TabBarHeader = () => {
  const { authType } = useParams<RouteParamsType>();

  return (
    <TabBarHeaderStyled align={'middle'}>
      <Link to={'/auth/login'}>
        <p>Log in</p>
      </Link>
      <Link to={'/auth/register'}>
        <p>Register</p>
      </Link>
    </TabBarHeaderStyled>
  );
};

export default TabBarHeader;
