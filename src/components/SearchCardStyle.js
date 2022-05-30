import styled from 'styled-components';

const SearchCardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .__search-card-content {
    border: 1px solid lightgray;
    border-radius: 8;
    box-shadow: 0 3px 6px lightgray, 0 3px 6px;
    overflow: hidden;
  }
  .__search-card-avatar {
    position: relative;
    width: 200px;
    height: 200px;
  }
  .__search-card-details-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: inherit;
    overflow: hidden;
  }
  .__search-card-details {
    margin: 8px;
    display: flex;
    flex-direction: column;
    .__details-header {
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    .__details-sub-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .__sub-header-text {
        display: flex;
        margin-bottom: 4px;
        align-items: center;
      }
      .__sub-section-photo-count {
        display: inline-block;
        height: 15px;
      }
    }
  }
`;

export default SearchCardStyle;
