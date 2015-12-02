import { actionConstants } from '../constants';

let {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} = actionConstants;

//-----------------------------------
// COUNTER
//-----------------------------------

export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}
