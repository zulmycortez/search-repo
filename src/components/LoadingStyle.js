import styled from 'styled-components';
import { gutters } from 'styles.js/gutters';

const LoadingStyle = styled.div`
  padding: ${gutters[2]};
  svg {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
  }
`;

export default LoadingStyle;
