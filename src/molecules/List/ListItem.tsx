import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  SpaceProps,
  FlexboxProps,
  TypographyProps
} from 'styled-system';

import { StyledItem } from './styled';
import Element from 'atoms/Element';
import { colorCheme, fontSizes } from 'styled/themes';

type StyledProps = SpaceProps & FlexboxProps & TypographyProps
interface Props extends StyledProps{
  to?: string | null;
  onClick?: any;
  [x:string]: any;
  isTab?: boolean;
  fontSize?: keyof typeof fontSizes;
  hasBorderTop?: boolean;
  hasBorderBottom?: boolean;
}

const ListItem: FC <Props> = ({ children, onClick, isTab = false, hasBorderTop = false, hasBorderBottom = false, to, 
  ...rest }) => {
  return (
    isTab ? 
      <StyledItem {...rest} hasBorderTop={hasBorderTop} hasBorderBottom={hasBorderBottom} onClick={onClick}> 
        {children}
      </StyledItem> :
      <Element as={to ? Link : 'div'} onClick={onClick} to={to} {...rest}>
        {children}
      </Element>
  );
};

export default ListItem;
