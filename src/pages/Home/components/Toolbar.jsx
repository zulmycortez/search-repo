import ToolbarStyle from './ToolbarStyle';
import { Button } from 'components';

const Toolbar = ({ options, events, searchValue, onSearchChange }) => {
  return (
    <ToolbarStyle>
      <input
        placeholder="Search by drink name"
        name="searchPage"
        value={searchValue}
        onChange={onSearchChange}
      />
      {options.map((option) => {
        const { disabled, key, alt, imgSrc } = option;
        return (
          <Button key={key} disabled={disabled} onClick={events[key]}>
            <img src={imgSrc} width={22} alt={alt}></img>
          </Button>
        );
      })}
    </ToolbarStyle>
  );
};

export default Toolbar;
