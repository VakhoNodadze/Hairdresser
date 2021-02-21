import Loadable from '@loadable/component';
import React from 'react';

const LoadaleAuthentication = Loadable(() => import('pages/Authentification'));

const routesConfig: Array<{path: string; exact: boolean; component?: any }> = [
  {
    path: '/',
    exact: false,
    component: LoadaleAuthentication
  }
];

export default routesConfig;