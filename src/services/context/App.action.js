import {SET_USER, UNSET_USER} from './App.actionType';

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const unsetUser = () => {
  return {
    type: UNSET_USER,
  };
};
