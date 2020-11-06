import React, {useReducer} from 'react';
import {appReducer} from './App.reducer';

const APP_INITIAL_STATE = {
  user: null,
};

const appContext = React.createContext(APP_INITIAL_STATE);
const {Provider} = appContext;

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {appContext, AppProvider};
