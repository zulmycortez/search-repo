import React from 'react';
import SearchCardStyle from './SearchCardStyle';

export default class Search extends React.PureComponent {
  render() {
    const { photoUrl = '', handle = '', location = '', age = 99, photoCount = 0 } = this.props;
    const subSectionText = location ? `${age} • ${location}` : age;

    return (
      <SearchCardStyle>
        <div className="__search-card-content">
          <div className="__search-card-avatar">
            <img src={photoUrl} alt="potential date"></img>
            <div className="__search-card-details-wrapper">
              <div className="__search-card-details">
                <h6 className="__details-header">{handle}</h6>
                <div className="__details-sub-header">
                  <div className="__sub-header-text">
                    <span>{subSectionText}</span>
                  </div>
                  {photoCount > 1 && (
                    <div className="__sub-section-photo-count">
                      <span>{photoCount}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SearchCardStyle>
    );
  }
}
