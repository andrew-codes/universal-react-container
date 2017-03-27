import {post} from 'axios';
import {createSelector} from 'reselect';

export const Name = 'Security';
export const Actions = {
  loginSuccess: 'Security/Login/Success',
};

export const login = (username, password) => (dispatch) => {
  post('/api/login')
    .then((result) => {
      dispatch({
        type: Actions.loginSuccess,
        payload: result,
      })
    });
};

export default (state = {}, action) => {
  switch (action.type) {
    case Actions.loginSuccess:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    default:
      return state;
  }
};

const getSecurityStateRoot = (state) => state[Name];
export const getIsUserAuthenticated = createSelector([getSecurityStateRoot], (root) => root.isAuthenticated);

