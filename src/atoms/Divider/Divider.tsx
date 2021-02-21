import React, { FC } from 'react';

import {
  SpaceProps,
  LayoutProps,
  ColorProps
} from 'styled-system';

import { StyledContainer, StyledVertical } from './styled';
import { colorCheme } from 'styled/themes';

type SystemProps = SpaceProps & LayoutProps & ColorProps

interface Props extends SystemProps {
  isHidden?: boolean;
  size?: string;
  color?: keyof typeof colorCheme;
  [x:string]: any;
  horizontal?: boolean;
}

const Divider: FC <Props> = ({ isHidden, size, color, horizontal=true, ...rest }) => {
  return horizontal ? 
    <StyledContainer isHidden={isHidden} color={color} size={size} {...rest} />
    : <StyledVertical {...rest} />;

};

export default Divider;
