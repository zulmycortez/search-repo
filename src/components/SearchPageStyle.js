import styled from 'styled-components';

const SearchPageStyle = styled.main`
  margin: 24px;
  .__profile-page-toolbar {
    display: flex;
    justify-content: flex-end;
  }
  .__profile-page-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
  }
`;

export default SearchPageStyle;
