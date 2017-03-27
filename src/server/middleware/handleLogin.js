import jwt from 'jsonwebtoken';
import createStore from './../createStore';
import {login} from './../modules/Security/ActionCreators';

export default (req, res) => {
  const store = createStore();
  store.dispatch(login('andrew-codes', 'password'));
  const state = store.getState();
  const token = state.Security.token;
  req.session.token = token;
  res.send(token);
};
