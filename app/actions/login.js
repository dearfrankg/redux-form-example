import { actionConstants, API_URL } from '../constants';
import { checkHttpStatus, parseJSON } from '../utils';
import { pushState } from 'redux-router';

let {
  LOGIN_USER_INIT,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS
} = actionConstants;

//-----------------------------------
// LOGIN
//-----------------------------------

export function loginUser(username, password, redirect) {
  return function(dispatch) {
    dispatch(loginUserRequest());

    // return fetch( API_URL + '/login', {
    //   method: 'post',
    //   credentials: 'include',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({username, password})
    // })

    return Promise.resolve((resolve, reject) => {
        setTimeout(() => {
          resolve({
            status: 200,
            statusText: 'login successful',
            token: 'ABCDEF'
          });

        }, 3000)
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        dispatch(loginUserSuccess(response.token));
        dispatch(pushState(null, redirect || '/'));
      })
      .catch(error => {
        dispatch(loginUserFailure(error));
      })
  }
}

export function loginUserInit() {
  return {
    type: LOGIN_USER_INIT
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

function loginUserSuccess(token) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}
