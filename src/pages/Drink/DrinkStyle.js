import styled from 'styled-components';
import { colors } from 'styles/colors';
import { gutters } from 'styles/gutters';

const DrinkStyle = styled.div`
  .__drink-container {
    margin: ${gutters[2]};
    display: flex;
    flex-wrap: wrap;
    gap: ${gutters[3]};
    border: 1px solid ${colors.grays[2]};
    padding: ${gutters[2]};
    border-radius: 8px;
    .__drink-img {
      max-height: 300px;
      max-width: 300px;
      border-radius: 4px;
      flex: 2 1 300px;
    }
    .__drink-items {
      flex: 1 2 300px;
    }
    .__drink-item {
      margin-bottom: ${gutters[1]};
    }
  }
`;

export default DrinkStyle;
