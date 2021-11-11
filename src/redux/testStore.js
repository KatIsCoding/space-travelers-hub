import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const testStore = createStore(
  combineReducers({
    missionsReducer,
    rocketsReducer,
  }),
  applyMiddleware(thunk),
);

export default testStore;
