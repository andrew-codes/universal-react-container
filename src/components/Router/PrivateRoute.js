import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

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
  isAuthenticated: state.Security.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
