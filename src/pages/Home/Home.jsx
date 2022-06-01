import React, { useEffect, useState } from 'react';
import { toolbarOptions } from 'constants/toolbarOptions';
import { useDrink } from '../../contexts/DrinkState';
import {
  getDrink,
  setLoading,
  sortAscending,
  sortDescending,
  searchDrink,
} from '../../contexts/DrinkAction';
import { Header, CardPaper, Error, Loading } from 'components';
import HomeCard from './components/HomeCard';
import Toolbar from './components/Toolbar';
import HomeStyle from './HomeStyle';

const Home = () => {
  const [drinkState, drinkDispatch] = useDrink();
  const [searchValue, setSearchValue] = useState('');
  const [timer, setTimer] = useState(0);
  const { drinks, loading, error, message } = drinkState;

  const getDrinks = async () => {
    await getDrink(drinkDispatch);
    setLoading(drinkDispatch, false);
  };

  useEffect(() => {
    if (timer === 10) {
      setTimer(0);
    }
    if (timer === 0) {
      getDrinks();
    }
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSortAscending = () => {
    sortAscending(drinkDispatch);
  };

  const handleSortDescending = () => {
    sortDescending(drinkDispatch);
  };

  const onSearchChange = (e) => {
    let value = e.target.value;
    setSearchValue(value);
    searchDrink(drinkDispatch, value);
  };

  const toolbarEvents = {
    sortAscending: handleSortAscending,
    sortDescending: handleSortDescending,
  };

  if (error) return <Error message={message} />;
  if (loading) return <Loading />;
  if (drinks.length === 0) return 'No Drinks :(';

  return (
    <React.Fragment>
      <Header />
      <HomeStyle>
        <div>Timer: {timer}</div>
        <Toolbar
          options={toolbarOptions}
          events={toolbarEvents}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
        />
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
