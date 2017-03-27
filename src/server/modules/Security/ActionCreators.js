import jwt from 'jsonwebtoken';

const secret = process.env.SECURITY_TOKEN_SECRET;

export const login = (username, password) => ({
  type: 'Security/Login',
  payload: jwt.sign({username: 'andrew-codes'}, secret),
});

export const authenticate = (token) => {
  try {
    return {
      type: 'Security/VerifyToken',
      payload: jwt.verify(token, secret)
    };
  }
  catch (error) {
    return {
      type: 'Security/Login/Failure',
      payload: error,
    }
  }
};

