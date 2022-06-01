import axios from 'axios';

export const sortAscending = (dispatch) => dispatch({ type: 'SORT_ASC' });
export const sortDescending = (dispatch) => dispatch({ type: 'SORT_DESC' });

export const setLoading = (dispatch, status) => dispatch({ type: 'SET_LOADING', payload: status });

export const setError = (dispatch, error) =>
  dispatch({
    type: 'SET_ERROR',
    payload: { error: error.status, message: error.message },
  });

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/randomselection.php',
  headers: {
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
    'X-RapidAPI-Key': 'sc6k2I2pDamshN1SQc1lHYif5cIZp1UKB8hjsnMriguKJt0jTo',
  },
};

export const getDrink = async (dispatch) => {
  setLoading(dispatch, true);

  await axios
    .request(options)
    .then((res) => {
      const result = res.data;
      dispatch({
        type: 'SET_DRINKS',
        payload: result.drinks,
      });
    })
    .catch((error) => {
      const result = error;

      dispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
          message: result,
        },
      });
    });
};
