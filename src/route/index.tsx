import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routesConfig from './routes';

interface AppRouteProps {
    layout: React.FC
    exact: boolean;
    path: string;
    component: any;
}

const AppRoute: FC <AppRouteProps> = ({ layout: Layout, ...rest }) => (
  <Layout>
    <Route {...rest} />
  </Layout>
);

const Router = () => (
  <Switch>
    <Redirect exact from={'/'} to={'/auth/login'} />
    {routesConfig.map((route) => (
      <AppRoute
        key={route.path || 'notFound'}
        exact={route.exact}
        path={route.path}
        component={route.component}
        layout={route.layout}
      />
    ))}
  </Switch>
);

export default Router;
