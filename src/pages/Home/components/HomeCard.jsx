import { useNavigate } from 'react-router-dom';
import HomeCardStyle from './HomeCardStyle';

const HomeCard = (props) => {
  const { photoUrl = '', name = '', glass = '', category = '' } = props;
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/drink/${props.id}`);
  };

  return (
    <HomeCardStyle onClick={onCardClick}>
      <div className="__home-card-content">
        <div className="__home-card-avatar">
          <img src={photoUrl} alt="potential drink" className="__img" />
          <div className="__home-card-details-wrapper">
            <div className="__home-card-details">
              <h6 className="__details-header">{name}</h6>
              <div className="__details-text">
                <div>{glass}</div>
                <div>{category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeCardStyle>
  );
};

export default HomeCard;
