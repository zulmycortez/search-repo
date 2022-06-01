import { findIngredientsAndMeasure } from './utils/findIngredientsAndMeasure';

export const drinkItems = (obj) => [
  {
    key: obj.strDrink,
    label: 'Drink Name:',
  },
  {
    key: obj.strCategory,
    label: 'Category:',
  },
  {
    key: findIngredientsAndMeasure(obj),
    label: 'Ingredients:',
  },
  {
    key: obj.strInstructions,
    label: 'Directions:',
  },
];
