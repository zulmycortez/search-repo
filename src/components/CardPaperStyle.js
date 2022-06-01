import styled from 'styled-components';
import { gutters } from 'styles.js/gutters';

const CardPaperStyle = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: ${gutters[2]} auto;
  max-width: 1000px;
  justify-content: center;
  gap: ${gutters[3]};
`;

export default CardPaperStyle;
