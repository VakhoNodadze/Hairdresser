import React, { FC } from 'react';

import { StyledContent } from './styled';

const ModalContent: FC = ({ children, ...rest }) => (
  <StyledContent className="content" {...rest}>
    {children}
  </StyledContent>
);

export default ModalContent;
