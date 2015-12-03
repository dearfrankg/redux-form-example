import {createConstants} from '../utils';

export const actionConstants = createConstants(
  'INCREMENT_COUNTER',
  'DECREMENT_COUNTER',

  'LOGIN_USER_INIT',
  'LOGIN_USER_REQUEST',
  'LOGIN_USER_FAILURE',
  'LOGIN_USER_SUCCESS'

);
