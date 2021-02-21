import React, { FC } from 'react';
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps
} from 'styled-system';

import Element from 'atoms/Element';


type StyledProps = SpaceProps & LayoutProps & FlexboxProps
interface Props extends StyledProps {
  width?: string;
  [x:string]: any;
}

const List: FC <Props> = ({ children, width, ...rest }) => {
  return (
    <Element {...rest} width={width}>
      {children}
    </Element>
  );
};

export default List;
