import React, { FC } from 'react';
import Topbar from 'organisms/Topbar';

const Clean: FC = ({ children }) =>
  <div style={{ height: '100vh', overflow: 'auto' }}>
    <Topbar />
    {children}
  </div>;

export default Clean;
