import { combineReducers } from 'redux';
import router from './router';
import nav from './nav';
const rootReducer = combineReducers({
  router,
  nav
});

export default rootReducer;
