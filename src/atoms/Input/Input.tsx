import React, { FC } from 'react';
import { withTheme } from 'styled-components';

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
  type?: string;
  register: any;
  name?: string;
}

const Input: FC <Props> = ({ placeholder , type, register, name, theme, ...rest }) => {
  return (
    <StyledContainer placeholder={placeholder} type={type} name={name} {...rest} ref={register} />
  );
};

export default withTheme(Input);