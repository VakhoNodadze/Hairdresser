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
  error?: any;
}

const Input: FC <Props> = ({ placeholder , type, register, error, name, theme, ...rest }) => {
  return (
    <StyledContainer>
      <StyledInput placeholder={placeholder} type={type} name={name} error={error} {...rest} ref={register} />
      {error?.message && <StyledError>{error?.message}</StyledError>}
    </StyledContainer>
  );
};

export default withTheme(Input);