import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';

import { sizes } from 'styled/themes';

interface Props {
  src: string;
  size?: keyof typeof sizes;
}

const Image: FC <Props> = ({ src, size = 'default', ...rest }) => (
  <StyledContainer size={size}>
    <img src={src} alt="" {...rest} />
  </StyledContainer>
);

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string]).isRequired
};


export default Image;
