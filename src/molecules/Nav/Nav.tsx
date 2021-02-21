import React, { FC } from 'react';
import { withTheme } from 'styled-components';

import Text from 'atoms/Text';
import { List, ListItem } from 'molecules/List';
import { IconItem } from 'atoms/Icons';
import * as icons from 'atoms/Icons';
import { ThemeProps } from 'styled/themes';

interface Props extends ThemeProps {
  items: {path: string; icon: keyof typeof icons; text: string;}[]
  activePath: string;
  showText?: boolean;
}

const Nav: FC <Props>= ({ items, activePath, showText = true, theme }) => {

  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.path} py={theme.space.small} px={theme.space.mid} 
          kind={activePath === item.path ? 'navActive' : 'nav'} to={item.path} display="flex">
          <IconItem theme={theme} name={item.icon} activeColor='blackWhite'
            defaultColor={activePath === item.path ? 'blackWhite' : 'primaryTxt'} />
          <Text style={{ marginLeft: theme.space.small, transition: '0.3s linear',
            visibility: showText ? 'visible' : 'hidden', minWidth: 180, opacity: showText ? 1 : 0 }} hover
          color={activePath === item.path ? 'blackWhite' : 'primaryTxt'} fontSize="sm">
            {item.text}
          </Text>
        </ListItem>
      ))}
    </List>
  );
};

export default withTheme(Nav);
