import React, { FC } from 'react';

import { StyledActions } from './styled';



const ModalActions: FC = ({ children, ...rest }) => (
  <StyledActions className="actions" {...rest}>
    {children}
  </StyledActions>
);

export default ModalActions;
