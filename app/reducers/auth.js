import {createReducer} from '../utils';
import { actionConstants } from '../constants';

let {
  LOGIN_USER_INIT,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS
} = actionConstants;

const initialState = {};

export default createReducer(initialState, {

  [LOGIN_USER_INIT]: (state, payload) => {
      return Object.assign({}, state, {
          'isAuthenticating': false,
          'statusText': null
      });
  },
  [LOGIN_USER_REQUEST]: (state, payload) => {
      return Object.assign({}, state, {
          'isAuthenticating': true,
          'statusText': null
      });
  },
  [LOGIN_USER_SUCCESS]: (state, payload) => {
      localStorage.setItem('token', payload.token);
      try {
          let decoded = jwtDecode(payload.token);
          return Object.assign({}, state, {
              'isAuthenticating': false,
              'isAuthenticated': true,
              'token': payload.token,
              'username': decoded.username,
              'statusText': `You have been successfully signed in as ${decoded.username}.`
          });
      } catch (e) {
          localStorage.removeItem('token');
          return Object.assign({}, state, {
              'isAuthenticating': false,
              'isAuthenticated': false,
              'token': null,
              'username': null,
              'statusText': `Invalid access token. Please log in again.`
          });
      }
  },
  [LOGIN_USER_FAILURE]: (state, payload) => {
      localStorage.removeItem('token');
      return Object.assign({}, state, {
          'isAuthenticating': false,
          'isAuthenticated': false,
          'token': null,
          'username': null,
          'statusText': `Login Error: ${payload.statusText}`
      });
  }

});
