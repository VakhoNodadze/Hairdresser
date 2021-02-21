import Loadable from '@loadable/component';
import React from 'react';

import { Default } from 'templates/Layout';

const LoadlableWatchlistPage = Loadable(() => import('pages/Watchlist'));
const LoadlableMarketsPage = Loadable(() => import('pages/Markets'));
const LoadlableSubMarketsPage = Loadable(() => import('pages/SubMarkets'));
const LoadlablePortfolioPage = Loadable(() => import('pages/Portfolio'));
const LoadlableStatsPage = Loadable(() => import('pages/Stats'));

const routesConfig: Array<{path: string; exact: boolean; component?: any, layout: React.FC}> = [
  {
    path: '/',
    exact: true,
    layout: Default
  },
  {
    path: '/watchlist',
    exact: true,
    component: LoadlableWatchlistPage,
    layout: Default
  },
  {
    path: '/trademarkets',
    exact: true,
    component: LoadlableMarketsPage,
    layout: Default
  },
  {
    path: '/trademarkets/stocks',
    exact: true,
    component: LoadlableSubMarketsPage,
    layout: Default
  },
  {
    path: '/trademarkets/crypto',
    exact: true,
    component: LoadlableSubMarketsPage,
    layout: Default
  },
  {
    path: '/trademarkets/currencies',
    exact: true,
    component: LoadlableSubMarketsPage,
    layout: Default
  },
  {
    path: '/portfolio',
    exact: true,
    component: LoadlablePortfolioPage,
    layout: Default
  },
  {
    path: '/newsfeed',
    exact: true,
    component: LoadlableStatsPage,
    layout: Default
  }
];

export default routesConfig;