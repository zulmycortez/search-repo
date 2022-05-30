import { useNavigate } from 'react-router-dom';
import SearchCardStyle from './SearchCardStyle';

const SearchCard = (props) => {
  const { photoUrl = '', handle = '', location = '', age = 99, photoCount = 0 } = props;
  const navigate = useNavigate();
  const subSectionText = location ? `${age} • ${location}` : age;
  const hasPhotos = photoCount > 1;

  const onProfileClick = () => {
    navigate(`/profile/${props.id}`);
  };

  return (
    <SearchCardStyle onClick={onProfileClick}>
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
                {hasPhotos && (
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
};

export default SearchCard;
