import styled from 'styled-components';
import { colors } from 'styles.js/colors';
import { gutters } from 'styles.js/gutters';

const HomeCardStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  .__search-card-content {
    border: 1px solid ${colors.grays[1]};
    border-radius: 8;
    box-shadow: 0 3px 6px ${colors.grays[1]}, 0 3px 6px;
    overflow: hidden;
  }
  .__search-card-avatar {
    position: relative;
    width: 200px;
    height: 200px;
    .__img {
      width: 100%;
      height: 100%;
    }
  }
  .__search-card-details-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: inherit;
    overflow: hidden;
  }
  .__search-card-details {
    margin: ${gutters[1]};
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

export default HomeCardStyle;
