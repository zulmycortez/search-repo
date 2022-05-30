import React from 'react';
import { Outlet } from 'react-router-dom';
import { toolbarOptions } from '../constants/toolbarOptions';
import { ProfileContext } from './ProfilesContextProvider';
import MinimalButton from './MinimalButton';
import Header from './Header';
import SearchCard from './SearchCard';
import SearchPageStyle from './SearchPageStyle';

class SearchPage extends React.Component {
  static contextType = ProfileContext;

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
    const { profiles = [] } = this.context;

    return (
      <React.Fragment>
        <Header />
        <SearchPageStyle>
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
            {profiles.map((profile) => (
              <SearchCard
                key={profile.id}
                photoUrl={profile.photoUrl}
                handle={profile.handle}
                location={profile.location}
                age={profile.age}
                photoCount={profile.photoCount}
              />
            ))}
          </div>
        </SearchPageStyle>
        <Outlet />
      </React.Fragment>
    );
  }
}

export default SearchPage;
