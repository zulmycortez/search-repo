import { useContext, useReducer } from 'react';
import { DrinkContext } from './DrinkContext.js';
import { reducer } from './DrinkReducer';

export const useDrink = () => {
  const { state, dispatch } = useContext(DrinkContext);
  return [state, dispatch];
};

export const DrinkState = ({ children }) => {
  const initialState = {
    drinks: [],
    drink: {},
    loading: false,
    error: false,
    message: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DrinkContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};
