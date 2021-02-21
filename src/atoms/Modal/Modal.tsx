import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Remove } from 'atoms/Icons';
import { ThemeProps } from 'styled/themes';
import { StyledOverlay, StyledContainer } from './styled';
import Flex from 'atoms/Flex';

interface Props extends ThemeProps{
  isOpen: boolean;
  onClose: any;
  size?: string;
  scrolling?: boolean;
  closeConfirmation?: any;
  Confirmation?: any;
  header?: React.ReactNode;
}

const Modal: FC <Props> = ({
  isOpen,
  onClose,
  children,
  size,
  scrolling,
  closeConfirmation,
  Confirmation,
  header,
  theme
}) => {
  const [fadeType, setFadeType] = useState('out');

  const handleClose = (e: any) => {
    if (e) {e.preventDefault();}
    if (!closeConfirmation) {setFadeType('out');}
    setTimeout(() => {
      onClose({ success: false });
    }, 200);
  };

  useEffect(
    () => {
      setTimeout(() => {
        if (isOpen) {setFadeType('in');}
      }, 0);
    },
    [isOpen]
  );

  if (isOpen) {
    return ReactDOM.createPortal(
      <StyledOverlay onClick={handleClose} fadeType={fadeType}>
        <StyledContainer
          className="platform-modal"
          onClick={(e) => e.stopPropagation()}
          fadeType={fadeType}
          size={size}
          scrolling={scrolling}
        >
          <Flex align='center'>
            {header}
            <div style={{ position: 'absolute', right: theme.space.small }}>
              <Remove />
            </div>
          </Flex>
          {children}
        </StyledContainer>
        {closeConfirmation && Confirmation}
      </StyledOverlay>,
      document.body
    );
  }

  return null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  size: PropTypes.string,
  scrolling: PropTypes.bool,
  closeConfirmation: PropTypes.bool,
  Confirmation: PropTypes.object
};

Modal.defaultProps = {
  isOpen: false,
  // eslint-disable-next-line no-empty-function
  onClose: () => {},
  size: 'default',
  scrolling: false,
  closeConfirmation: false,
  Confirmation: null
};

export default withTheme(Modal);
