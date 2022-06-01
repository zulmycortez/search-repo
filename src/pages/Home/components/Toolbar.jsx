import ToolbarStyle from './ToolbarStyle';
import { MinimalButton } from 'components';

const Toolbar = ({ options, events }) => {
  return (
    <ToolbarStyle>
      {options.map((option) => {
        const { disabled, key, alt, imgSrc } = option;
        return (
          <MinimalButton key={key} disabled={disabled} onClick={events[key]}>
            <img src={imgSrc} width={22} alt={alt}></img>
          </MinimalButton>
        );
      })}
    </ToolbarStyle>
  );
};

export default Toolbar;
