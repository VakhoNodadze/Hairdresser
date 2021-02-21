import React, { FC } from 'react';

// import Spinner from 'Icon/Spinner'

const Loader: FC = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {/* <Spinner /> */}
  </div>
);

export default Loader;
