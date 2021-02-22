import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabBarHeaderStyled } from './TabHeader.styled';
import { withTheme } from 'styled-components';
import { ThemeProps } from 'styled/themes';
import Text from 'atoms/Text';

type RouteParamsType = {
    authType: 'login' | 'register';
};

interface Props extends ThemeProps{}

const TabBarHeader: FC <Props> = ({ theme }) => {
  const { authType } = useParams<RouteParamsType>();

  const style = {
    background: theme.colors.topbarBg,
    borderRadius: '120px',
    display: 'flex',
    justifyContent: 'center',
    padding: '5px 0',
    margin: '0 10px'
  };
  return (
    <TabBarHeaderStyled align={'middle'}>
      <div style={authType === 'login' ? style : { margin: '0 10px' }}>
        <Link to={'/auth/login'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 10px', width: '120px' }}>
          <Text color='white'>Log in</Text>
        </Link>
      </div>
      <div style={authType === 'register' ? style : { margin: '0 10px' }}>
        <Link to={'/auth/register'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 10px', width: '120px' }}>
          <Text color='white'>Register</Text>
        </Link>
      </div>
    </TabBarHeaderStyled>
  );
};

export default withTheme(TabBarHeader);
