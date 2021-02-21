import React, { FC } from 'react';
import { withTheme } from 'styled-components';
import { ThemeProps } from 'styled/themes';
import { useSelector } from 'react-redux';
import { List, ListItem } from 'molecules/List';
import { AppState } from 'redux/ducks';
import { REGISTERPAYLOAD } from 'redux/ducks/authorization';
import Flex from 'atoms/Flex';
import Text from 'atoms/Text';

interface Props extends ThemeProps{}

const Hairdressers: FC <Props> = ({ theme }) => {
  const users = useSelector<AppState, REGISTERPAYLOAD[]>((state) => state.register.users);
  return (
    <Flex justify='center' align='center'>
      <List>
        {users.map((user) => (
          <ListItem border='1px solid black' p={theme.space.mid}>
            <Flex direction='column'>
              <Text>
                {`${user.firstName} ${user.lastName}`}
              </Text>
              <Text>
                    Price: {user.price}
              </Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default withTheme(Hairdressers);