import React, { useEffect } from 'react';
import { toolbarOptions } from 'constants/toolbarOptions';
import { useDrink } from '../../contexts/DrinkState';
import { getDrink, setLoading, sortAscending, sortDescending } from '../../contexts/DrinkAction';
import { Header, CardPaper, Error, Loading } from 'components';
import HomeCard from './components/HomeCard';
import Toolbar from './components/Toolbar';
import HomeStyle from './HomeStyle';

const Home = () => {
  const [drinkState, drinkDispatch] = useDrink();
  const { drinks, loading, error, message } = drinkState;

  const getDrinkInfoHandler = async () => {
    await getDrink(drinkDispatch);
    setLoading(drinkDispatch, false);
  };

  useEffect(() => {
    getDrinkInfoHandler();
  }, []);

  const handleSortAscending = () => {
    sortAscending(drinkDispatch);
  };

  const handleSortDescending = () => {
    sortDescending(drinkDispatch);
  };

  const toolbarEvents = {
    sortAscending: handleSortAscending,
    sortDescending: handleSortDescending,
  };

  console.log('drinks', drinks);
  console.log('loading', loading);
  console.log('error', error);
  console.log('message', message);

  if (error) return <Error message={message} />;
  if (loading) return <Loading />;
  if (drinks.length === 0) return 'No Drinks :(';

  return (
    <React.Fragment>
      <Header />
      <HomeStyle>
        <Toolbar options={toolbarOptions} events={toolbarEvents} />
        <CardPaper>
          {drinks.map((profile) => (
            <HomeCard
              key={profile.idDrink}
              id={profile.idDrink}
              photoUrl={profile.strDrinkThumb}
              name={profile.strDrink}
              glass={profile.strGlass}
              category={profile.strCategory}
            />
          ))}
        </CardPaper>
      </HomeStyle>
    </React.Fragment>
  );
};

export default Home;
