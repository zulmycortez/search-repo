import { useContext, useEffect } from 'react';
import { DrinkContext } from '../../providers/DrinksContextProvider';
import { useParams } from 'react-router-dom';

const Drink = () => {
  const context = useContext(DrinkContext);
  let { id } = useParams();

  useEffect(() => {
    context.dispatch({ type: 'findProfileById', id: id });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div>name</div>
      <div>more details</div>
    </div>
  );
};

export default Drink;
