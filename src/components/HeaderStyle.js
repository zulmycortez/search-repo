import styled from 'styled-components';
import { colors } from 'styles.js/colors';
import { gutters } from 'styles.js/gutters';

const HeaderStyle = styled.header`
  border-bottom: 1px solid ${colors.grays[2]};
  padding: ${gutters[2]};
`;

export default HeaderStyle;
