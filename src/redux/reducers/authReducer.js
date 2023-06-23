import {LOGIN, LOGOUT, SET_USER_DATA} from '../actions/action';

const initialState = {
  isLoggedIn: false,
  userType: '',
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userType: action.payload.userType,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userType: '',
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
