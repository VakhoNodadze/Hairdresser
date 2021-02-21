import React, { FC } from 'react';
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps
} from 'styled-system';
import { StyledContainer } from './styled';
import { spacing } from 'styled/themes';

type SystemProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps
interface Props extends SystemProps{
  spacing?: keyof typeof spacing;
  fluid?: boolean;
  [x:string]: any;
}

const Grid: FC <Props> = ({ children, spacing, fluid = false, ...rest }) => (
  <StyledContainer className="grid" spacing={spacing} fluid={fluid} {...rest as any}>
    {children}
  </StyledContainer>
);

Grid.defaultProps = {
  spacing: 'mini'
};

export default Grid;