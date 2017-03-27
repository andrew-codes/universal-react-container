import jwt from 'jsonwebtoken';
import {createSelector} from 'reselect';

export const Name = 'Security';

const secret = process.env.SECURITY_TOKEN_SECRET;
export const Actions = {
  login: 'Server/Security/Login',
  verifyTokenSuccess: 'Server/Security/VerifyToken/Success',
  verifyTokenFailure: 'Server/Security/VerifyToken/Failure',
};

export const login = (username, password) => ({
  type: Actions.login,
  payload: jwt.sign({username: 'andrew-codes'}, secret),
});

export const authenticate = (token) => {
  try {
    return {
      type: Actions.verifyTokenSuccess,
      payload: jwt.verify(token, secret)
    };
  }
  catch (error) {
    return {
      type: Actions.verifyTokenFailure,
      payload: error,
    }
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case Actions.login:
      return {
        ...state,
        token: action.payload,
      };
    case Actions.verifyTokenSuccess:
      return {
        ...state,
        isAuthenticated: true,
      };
    case Actions.verifyTokenFailure:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

const getSecurityStateRoot = (state) => state[Name];
export const getToken = createSelector([getSecurityStateRoot], (root) => root.token);
