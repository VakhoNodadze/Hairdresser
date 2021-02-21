import React, { FC } from 'react';
import {
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps
} from 'styled-system';
import { StyledContainer, StyledSpan } from './styled';
import { fontSizes, colorCheme } from 'styled/themes';

type SystemProps = SpaceProps & LayoutProps & TypographyProps & ColorProps & FlexboxProps
interface Props extends SystemProps{
  fontSize?: keyof typeof fontSizes;
  color?: keyof typeof colorCheme;
  bg?: keyof typeof colorCheme;
  hover?: boolean;
  span?: boolean;
  [x:string]: any;
}

const Text:FC<Props> = ({ fontSize, span = false, children, hover, ...rest }) => {
  return (
    span ? 
      <StyledSpan hover={hover} fontSize={fontSize} {...rest}>{children}</StyledSpan> :
      <StyledContainer fontSize={fontSize} hover={hover} {...rest}>{children}</StyledContainer>
  );
};

export default Text;