import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDrink } from '../../contexts/DrinkState';
import { getDrinkById, setLoading } from '../../contexts/DrinkAction';
import { Header, Error, Loading, Paper } from 'components';
import { BackButton, DrinkView } from './components';
import { drinkItems } from './drinkItems';
import DrinkStyle from './DrinkStyle';

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

  return (
    <>
      <Header />
      <Paper>
        <DrinkStyle>
          <BackButton />
          <DrinkView img={drink.strDrinkThumb} name={drink.strDrink} items={drinkItems(drink)} />
        </DrinkStyle>
      </Paper>
    </>
  );
};

export default Drink;
