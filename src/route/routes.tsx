import Loadable from '@loadable/component';
import React from 'react';
import { Default, Clean } from 'Layout';
const LoadaleAuthentication = Loadable(() => import('pages/Authentification'));
const LoadableHairdressers = Loadable(() => import('pages/Hairdressers'));

const routesConfig: Array<{path: string; exact: boolean; component?: any, layout: React.FC }> = [
  {
    path: '/auth/:authType(login|register)',
    exact: true,
    component: LoadaleAuthentication,
    layout: Clean
  },
  {
    path: '/hairdressers',
    exact: true,
    component: LoadableHairdressers,
    layout: Default
  }
];

export default routesConfig;