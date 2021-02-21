import React, { FC } from 'react';
import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  BorderProps
} from 'styled-system';
import PropTypes from 'prop-types';
import { StyledItem } from './styled';

const GRID_SIZES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type SystemProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps & BorderProps
interface Props extends SystemProps{
  xs?: number | null;
  sm?: number | null;
  md?: number | null;
  lg?: number | null;
  xl?: number | null;
  fluid?: boolean;
  [x:string]: any;
}

const GridItem: FC <Props> = ({ children, xs, fluid = false, ...rest }) => (
  <StyledItem className="item" xs={xs} fluid={fluid} {...rest}>
    {children}
  </StyledItem>
);

GridItem.propTypes = {
  xs: PropTypes.oneOf(GRID_SIZES),
  sm: PropTypes.oneOf(GRID_SIZES),
  md: PropTypes.oneOf(GRID_SIZES),
  lg: PropTypes.oneOf(GRID_SIZES),
  xl: PropTypes.oneOf(GRID_SIZES)
};

GridItem.defaultProps = {
  xs: 12,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

export default GridItem;