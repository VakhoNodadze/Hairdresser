import React from 'react';
import { lazyLoadable } from 'utils';
import { HomePageTableItem, HomePageTableHead } from 'components/skeletons';

export const LoginPageLazy = lazyLoadable(
  () => import('./LoginPage'),
  <>
    <HomePageTableHead />
    <HomePageTableItem />
  </>,
);
