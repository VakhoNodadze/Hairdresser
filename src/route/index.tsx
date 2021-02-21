import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import routesConfig from './routes';

interface AppRouteProps {
    exact: boolean;
    path: string;
    component: any;
}

const AppRoute: FC <AppRouteProps> = ({ ...rest }) => (
  <Route {...rest} />
);

const Router = () => (
  <Switch>
    {routesConfig.map((route) => (
      <AppRoute
        key={route.path || 'notFound'}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);

export default Router;
