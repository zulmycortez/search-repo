import styled from 'styled-components';
import { colors } from 'styles/colors';
import { gutters } from 'styles/gutters';

const HomeCardStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  .__home-card-content {
    border: 1px solid ${colors.grays[1]};
    border-radius: 8;
    box-shadow: 0 3px 6px ${colors.grays[1]}, 0 3px 6px;
    overflow: hidden;
  }
  .__home-card-avatar {
    position: relative;
    width: 200px;
    height: 200px;
    .__img {
      width: 100%;
      height: 100%;
    }
  }
  .__home-card-details-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: inherit;
    overflow: hidden;
  }
  .__home-card-details {
    padding: ${gutters[1]};
    display: flex;
    flex-direction: column;
    background-color: ${colors.grays[2]};
    opacity: 0.6;
    .__details-header {
      font-size: 16px;
      display: flex;
      align-items: center;
      margin: ${gutters[1]} 0;
      text-align: left;
    }
    .__details-text {
      display: flex;
      flex-direction: column;
      gap: ${gutters[1]};
      align-items: flex-end;
    }
  }
`;

export default HomeCardStyle;
