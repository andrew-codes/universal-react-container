import axios from 'axios';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
  state = {
    redirectToReferrer: false,
  };

  render() {
    const {
      redirectToReferrer
    } = this.state;
    const {
      from
    } = this.props.location.state || {from: {pathname: '/'}};

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <button onClick={(evt) => {
        axios.post('/api/login')
          .then((result) => {
            this.setState({
              redirectToReferrer: true,
            });
          })
      }}>
        Login
      </button>
    );
  }
}

