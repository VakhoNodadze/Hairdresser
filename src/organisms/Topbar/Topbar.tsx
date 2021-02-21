import React, { FC } from 'react';
import { withTheme } from 'styled-components';
import { ThemeProps } from 'styled/themes';
import Flex from 'atoms/Flex';
import Text from 'atoms/Text';
import { useHistory, useParams } from 'react-router-dom';

interface Props extends ThemeProps{}

interface RouteParamsType {
    id: string;
}

const Topbar: FC <Props> = ({ theme }) => {

  const { replace } = useHistory();
  const { id } = useParams<RouteParamsType>();

  const logoutHandler = () => {
    localStorage.removeItem('userId');
    replace('/auth/login');
  };

  console.log('ID', id);

  return (
    <Flex justify='end' align='center' py={theme.space.default} px={theme.space.xLarge} bg='topbarBg'>
      <Text color='white' fontSize='lg'style={{ cursor: 'pointer' }} onClick={() => logoutHandler()}>
          Logout
      </Text>
    </Flex>
  );
};

export default withTheme(Topbar);