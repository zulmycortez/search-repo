import { useNavigate } from 'react-router-dom';
import { Button } from 'components';

const BackButton = () => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(`/`);
  };

  return (
    <Button variant="primary" onClick={onBackClick}>
      Back to home
    </Button>
  );
};

export default BackButton;
