import {createContext, useReducer} from 'react';
import reducers from './Reducers';

export const DataContext = createContext(null);

export const DataProvider = ({children}: any) => {
  const initialState = {
    token: null,
    user: null,
    success: null,
    error: false,
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  );
};
