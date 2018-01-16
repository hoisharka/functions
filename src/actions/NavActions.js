import { TOGGLE_NAV_COLLAPSE } from '../constants/ActionTypes';

export const toggleNavCollapse = (toggle) => {
  return {
    type: TOGGLE_NAV_COLLAPSE,
    toggle
  };
};
