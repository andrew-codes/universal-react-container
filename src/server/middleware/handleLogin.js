import createStore from './../createStore';
import {getToken, login} from './../../modules/Security/server';

export default (req, res) => {
  const store = createStore();
  store.dispatch(login('andrew-codes', 'password'));
  const state = store.getState();
  const token = getToken(state);
  req.session.token = token;
  res.send(token);
};
