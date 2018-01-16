import * as types from '../constants/ActionTypes';
import { NAV_COLLAPSE } from '../constants/NavConstants';

const initialState = {
  navCollapse: NAV_COLLAPSE.OFF
};

const nav = (state = initialState, action) => {
  switch (action.type) {
  case types.TOGGLE_NAV_COLLAPSE:
    return {
      ...state,
      navCollapse: !state.navCollapse
    };
    
  default:
    return state;
  }
};

export default nav;
