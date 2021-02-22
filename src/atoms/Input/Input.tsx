import React, { FC } from 'react';
import { withTheme } from 'styled-components';

import Element from 'atoms/Element';
import { colorCheme, fontSizes, ThemeProps } from 'styled/themes';
import { StyledContainer, StyledInput, StyledError } from './styled';

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
  autocomplete?: string;
}

const Input: FC <Props> = ({ placeholder , type, register, autocomplete, name, theme, ...rest }) => {
  return (
    <StyledContainer>
      <StyledInput placeholder={placeholder} type={type} name={name} {...rest} ref={register} autocomplete={autocomplete} />
    </StyledContainer>
  );
};

export default withTheme(Input);