import React, { FC, useEffect } from 'react';
import { withTheme } from 'styled-components';
import { ThemeProps } from 'styled/themes';
import { useSelector } from 'react-redux';
import { List, ListItem } from 'molecules/List';
import { AppState } from 'redux/ducks';
import { REGISTERPAYLOAD } from 'redux/ducks/authorization';
import Flex from 'atoms/Flex';
import Text from 'atoms/Text';
import Button from 'atoms/Button';
import { useHistory } from 'react-router-dom';

interface Props extends ThemeProps{}

const Hairdressers: FC <Props> = ({ theme }) => {
  const users = useSelector<AppState, REGISTERPAYLOAD[]>((state) => state.register.users);

  const { replace } = useHistory();
  const detailsHandler = (id: string) => {
    replace(`/hairdressers/${id}`);
  };


  return (
    <Flex justify='center' align='center'>
      <List mt={theme.space.xLarge}>
        {users.map((user) => (
          <ListItem border='1px solid black' m={theme.space.tiny} p={theme.space.mid}>
            <Flex width='100%' justify='between'>
              <Flex direction='column'>
                <Text>
                  {`${user.firstName} ${user.lastName}`}
                </Text>
                <Text>
                          Price: {user.price}
                </Text>
              </Flex>
              <Button onClick={() => detailsHandler(user.id)}>Details</Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default withTheme(Hairdressers);