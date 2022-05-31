import { useNavigate } from 'react-router-dom';
import HomeCardStyle from './HomeCardStyle';

const HomeCard = (props) => {
  const { photoUrl = '', name = '', glass = '', category = '' } = props;
  const navigate = useNavigate();
  const subSectionText = `${glass} • ${category}`;

  const onCardClick = () => {
    navigate(`/drink/${props.id}`);
  };

  return (
    <HomeCardStyle onClick={onCardClick}>
      <div className="__search-card-content">
        <div className="__search-card-avatar">
          <img src={photoUrl} alt="potential date" className="__img" />
          <div className="__search-card-details-wrapper">
            <div className="__search-card-details">
              <h6 className="__details-header">{name}</h6>
              <div className="__details-sub-header">
                <div className="__sub-header-text">
                  <span>{subSectionText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeCardStyle>
  );
};

export default HomeCard;
