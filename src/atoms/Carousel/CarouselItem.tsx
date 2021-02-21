import React, { FC } from 'react';
import { StyledItem } from './styled';

import { spacing } from 'styled/themes';


type Props = {
  spacing?: keyof typeof spacing;
}

const CarouselItem: FC <Props> = ({ children, spacing, ...rest }) => (
  <StyledItem className="item" {...rest}>
    {children}
  </StyledItem>
);

// CarouselItem.propTypes = {
//   spacing: PropTypes.oneOf(spacings)
// };

// CarouselItem.defaultProps = {
//   spacing: 'mini'
// };

export default CarouselItem;
