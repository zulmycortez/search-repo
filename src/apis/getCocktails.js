import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/randomselection.php',
  headers: {
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
    'X-RapidAPI-Key': 'sc6k2I2pDamshN1SQc1lHYif5cIZp1UKB8hjsnMriguKJt0jTo',
  },
};

export const cocktails = axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
