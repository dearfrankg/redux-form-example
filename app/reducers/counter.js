import {createReducer} from '../utils';
import { actionConstants } from '../constants';

let {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} = actionConstants;

const initialState = 0;

export default createReducer(initialState, {

  [INCREMENT_COUNTER]: (state) => state + 1,
  [DECREMENT_COUNTER]: (state) => state - 1,

});
