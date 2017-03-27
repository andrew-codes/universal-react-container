import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from './../modules/Security';

class Login extends Component {
  state = {
    redirectToReferrer: false,
  };

  render() {
    const {
      redirectToReferrer
    } = this.state;
    const {
      onLogin
    } = this.props;
    const {
      from
    } = this.props.location.state || {
      from: {
        pathname: '/',
      }
    };

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <button onClick={(evt) => {
        onLogin();
      }}>
        Login
      </button>
    );
  }
}
export default connect(() => ({}), (dispatch) => ({
  onLogin: bindActionCreators(login, dispatch),
}))(Login);

