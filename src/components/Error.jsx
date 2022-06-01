import { Paper, Header } from 'components';
import ErrorStyle from './ErrorStyle';

const Error = ({ message }) => {
  return (
    <>
      <Header />
      <Paper>
        <ErrorStyle>
          <h4>An error has occured</h4>
          <p>Message: {message.message}</p>
        </ErrorStyle>
      </Paper>
    </>
  );
};

export default Error;
