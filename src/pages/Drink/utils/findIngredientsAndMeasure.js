export const findIngredientsAndMeasure = (obj) => {
  let list = [];
  for (const property in obj) {
    if (property.includes('strIngredient') && obj[property]) {
      let map = {};
      let number = property.slice(-1);
      map['ingredient'] = obj[property];
      map['measure'] = obj['strMeasure' + number];
      list.push(map);
    }
  }
  return list;
};
