import styled from 'styled-components';
import { gutters } from 'styles.js/gutters';

const SearchPageStyle = styled.main`
  margin: ${gutters[3]};
  .__profile-page-toolbar {
    display: flex;
    justify-content: flex-end;
  }
  .__profile-page-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: ${gutters[2]};
  }
`;

export default SearchPageStyle;
