import React from 'react';
import { toolbarOptions } from 'constants/toolbarOptions';
import { DrinkContext } from 'providers/DrinksContextProvider';
import { MinimalButton, Header } from 'components';
import HomeCard from './components/HomeCard';
import HomeStyle from './HomeStyle';

class Home extends React.Component {
  static contextType = DrinkContext;

  handleSortAscending = () => {
    this.context.dispatch({ type: 'ascending' });
  };

  handleSortDescending = () => {
    this.context.dispatch({ type: 'descending' });
  };

  toolbarEvents = {
    sortAscending: this.handleSortAscending,
    sortDescending: this.handleSortDescending,
  };

  render() {
    const { drinks = [] } = this.context;

    return (
      <React.Fragment>
        <Header />
        <HomeStyle>
          <div className="__profile-page-toolbar">
            {toolbarOptions.map((option) => {
              const { disabled, key, alt, imgSrc } = option;
              return (
                <MinimalButton key={key} disabled={disabled} onClick={this.toolbarEvents[key]}>
                  <img src={imgSrc} width={22} alt={alt}></img>
                </MinimalButton>
              );
            })}
          </div>
          <div className="__profile-page-grid">
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
          </div>
        </HomeStyle>
      </React.Fragment>
    );
  }
}

export default Home;
