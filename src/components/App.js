import React from 'react';
import {Route, Switch} from 'react-router';
import Home from './Home';
import Login from './Login';
import NotFound from './Router/NotFound';
import PrivateRoute from './Router/PrivateRoute';
import ProtectedHome from './ProtectedPage';

const App = (props) => (
  <Switch>
    <Route
      component={Home}
      exact={true}
      path="/"
    />
    <Route
      component={Login}
      exact={true}
      path="/login"
    />
    <PrivateRoute
      component={ProtectedHome}
      exact={true}
      path="/protected"
    />
    <NotFound />
  </Switch>
);

export default App;
