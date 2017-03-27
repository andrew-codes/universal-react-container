export default (state = {}, action) => {
  switch (action.type) {
    case 'Security/Login':
      return {
        ...state,
        token: action.payload,
      };
    case 'Security/VerifyToken':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'Security/Login/Failure':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

