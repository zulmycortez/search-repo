import { Paper, Header } from 'components';
import LoadingStyle from './LoadingStyle';
import { Loader } from '../svgs/Loader';

const Loading = () => {
  return (
    <>
      <Header />
      <Paper>
        <LoadingStyle>
          <Loader />
        </LoadingStyle>
      </Paper>
    </>
  );
};

export default Loading;
