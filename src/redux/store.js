import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './ducks/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
