import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';

export default combineReducers({
 counter,
 router: routerStateReducer,
 form: formReducer
});
