import {SET_USER, UNSET_USER} from './App.actionType';

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UNSET_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
