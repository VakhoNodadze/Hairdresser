import React, { FC } from 'react';

import { StyledHeader } from './styled';

const ModalHeader: FC = ({ children, ...rest }) => (
  <StyledHeader className="header" {...rest}>
    {children}
  </StyledHeader>
);

export default ModalHeader;
