import styled from 'styled-components';
import { gutters } from 'styles.js/gutters';

const MinimalButtonStyle = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: ${gutters[1]};
`;

export default MinimalButtonStyle;
