import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styled';
import { colorCheme } from 'styled/themes';
import Spinner from 'atoms/Icons/Spinner';

interface Props {
  color: keyof typeof colorCheme;
  loading?: boolean;
  onClick?: any;
  [x:string]: any;
}

const Segment: FC <Props> = ({ children, color, loading, onClick, ...rest }) => {
  const renderLoader = () => (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255, .34)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Spinner />
    </div>
  );

  return (
    <StyledContainer color={color} clickable={typeof onClick === 'function'} onClick={onClick} {...rest}>
      {children}
      {loading && renderLoader()}
    </StyledContainer>
  );
};

// Segment.propTypes = {
//   color: PropTypes.oneOf(colors),
//   loading: PropTypes.bool,
//   onClick: PropTypes.func
// };

// Segment.defaultProps = {
//   color: 'elementBg',
//   loading: false,
//   onClick: undefined
// };

export default Segment;
