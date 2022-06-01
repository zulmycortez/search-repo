import { useContext, useEffect } from 'react';
import { useDrink } from '../../contexts/DrinkState';
import { getDrinkById, setLoading } from '../../contexts/DrinkAction';
import { Header, CardPaper, Error, Loading } from 'components';
import { useParams } from 'react-router-dom';

const Drink = () => {
  const [drinkState, drinkDispatch] = useDrink();
  const { drink, loading, error, message } = drinkState;
  const { id } = useParams();

  const getDrinkInfo = async () => {
    await getDrinkById(drinkDispatch, id);
    setLoading(drinkDispatch, false);
  };

  useEffect(() => {
    getDrinkInfo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) return <Error message={message} />;
  if (loading) return <Loading />;
  if (!drink) return 'No Drink by this ID :(';

  return (
    <>
      <Header />
      <div>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        Drink Name: {drink.strDrink}
        Category: {drink.strCategory}
        Ing: {drink.strIngredient1}
        Directions: {drink.strInstructions}
      </div>
    </>
  );
};

export default Drink;
