import React, { FC } from 'react';
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  ColorProps,
  BorderProps,
  TypographyProps
} from 'styled-system';

import { StyledElement } from './styled';
import { colorCheme, fontSizes } from 'styled/themes';

type StyledProps = SpaceProps & LayoutProps & FlexboxProps & ColorProps & BorderProps & TypographyProps
interface Props extends StyledProps{
  as?: any;
  [x:string]: any;
  width?: string | number;
  color?: keyof typeof colorCheme;
  fontSize?: keyof typeof fontSizes;
  bg?: keyof typeof colorCheme;
}

const Element: FC <Props> = React.forwardRef(({ children, FlexboxProps, onClick, ...rest }, ref) => {
  return (
    <StyledElement {...rest} ref={ref} onClick={onClick}>
      {children}
    </StyledElement>
  );
});

Element.defaultProps = {
  as: 'div'
};

export default Element;
