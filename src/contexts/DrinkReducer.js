export const reducer = (state, action) => {
  let currentDrinks;
  switch (action.type) {
    case 'SET_DRINKS':
      return {
        ...state,
        drinks: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SORT_ASC':
      currentDrinks = [...state.drinks];
      currentDrinks.sort((drinkA, drinkB) => (drinkA.strDrink > drinkB.strDrink ? 1 : -1));
      return {
        ...state,
        drinks: currentDrinks,
      };
    case 'SORT_DESC':
      currentDrinks = [...state.drinks];
      currentDrinks.sort((drinkA, drinkB) => (drinkA.strDrink < drinkB.strDrink ? 1 : -1));
      return {
        ...state,
        drinks: currentDrinks,
      };
    case 'SET_DRINK_BY_ID':
      return {
        ...state,
        drink: action.payload,
      };
    default:
      return state;
  }
};
