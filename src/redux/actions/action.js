export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER_DATA = 'SET_USER_DATA';

// import * from '../const/const'

export const login = userType => ({
  type: LOGIN,
  payload: userType,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUserData = userData => ({
  type: SET_USER_DATA,
  payload: userData,
});
