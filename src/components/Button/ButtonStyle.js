import styled from 'styled-components';
import { gutters } from 'styles/gutters';
import { colors } from 'styles/colors';

const ButtonStyle = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: ${gutters[1]};
  ${(props) =>
    props.variant === 'primary' &&
    `border: 1px solid ${colors.grays[2]};
    margin: 0 ${gutters[2]};
    font-weight: 500;
    padding: ${gutters[1]};`}
`;

export default ButtonStyle;
