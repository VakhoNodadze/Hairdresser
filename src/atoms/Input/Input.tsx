import React, { FC } from 'react';

import { colorCheme, fontSizes, ThemeProps } from 'styled/themes';
import { StyledContainer } from './styled';

import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  ColorProps,
  TypographyProps, BorderProps
} from 'styled-system';


type SystemProps = ThemeProps & SpaceProps & LayoutProps & TypographyProps & ColorProps & FlexboxProps & BorderProps
interface Props extends SystemProps{
  placeholder?: string;
  fontSize?: keyof typeof fontSizes;
  color?: keyof typeof colorCheme;
}

const Input: FC <Props> = ({ placeholder }) => {
  return (
    <StyledContainer placeholder={placeholder} />
  );
};

export default Input;