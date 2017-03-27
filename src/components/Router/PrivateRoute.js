import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {getIsUserAuthenticated} from './../../modules/Security';

const PrivateRoute = ({component, isAuthenticated, ...rest}, context) => (
  <Route {...rest} render={(props) => isAuthenticated
    ? React.createElement(component, ...rest)
    : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }} />
    )
  }
  />
);
const mapStateToProps = (state) => ({
  isAuthenticated: getIsUserAuthenticated(state),
});
export default connect(mapStateToProps)(PrivateRoute);
