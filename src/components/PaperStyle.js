import styled from 'styled-components';
import { gutters } from 'styles/gutters';

const PaperStyle = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: ${gutters[2]} auto;
  max-width: 1000px;
  justify-content: center;
`;

export default PaperStyle;
