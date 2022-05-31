import React from 'react';
import mockDrinks from '../drinks.json';

export const DrinkContext = React.createContext({
  drinks: [],
  drink: null,
  loading: false,
  error: null,
});

const DrinksReducer = (state, action) => {
  let drinks;

  switch (action.type) {
    case 'ascending':
      drinks = [...state.drinks];
      drinks.sort((drinkA, drinkB) => (drinkA.strDrink > drinkB.strDrink ? 1 : -1));
      return { drinks };

    case 'descending':
      drinks = [...state.drinks];
      drinks.sort((drinkA, drinkB) => (drinkA.strDrink < drinkB.strDrink ? 1 : -1));
      return { drinks };

    case 'findProfileById':
      drinks = [...state.drinks];
      const drinkById = drinks.filter((drink) => drink.idDrink === parseInt(action.id));
      return {
        ...state,
        drink: drinkById[0],
      };
    default:
      throw new Error();
  }
};

const DrinksContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(DrinksReducer, {
    drinks: mockDrinks,
    drink: null,
    loading: false,
    error: null,
  });

  return <DrinkContext.Provider value={{ ...state, dispatch }}>{children}</DrinkContext.Provider>;
};

export default DrinksContextProvider;
