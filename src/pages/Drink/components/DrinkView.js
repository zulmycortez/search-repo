import { Label } from 'components';

const DrinkView = ({ img, name, items }) => {
  return (
    <div className="__drink-container">
      <img src={img} alt={name} className="__drink-img" />
      <div className="__drink-items">
        {items.map((item, index) => {
          if (Array.isArray(item.key)) {
            return (
              <div key={index} className="__drink-item">
                <Label>{item.label}</Label>
                {item.key.map((str, index) => (
                  <ul key={index}>
                    <li>
                      {str.measure} {str.ingredient}
                    </li>
                  </ul>
                ))}
              </div>
            );
          }
          return (
            <div key={index} className="__drink-item">
              <Label>{item.label}</Label>
              <span>{item.key}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DrinkView;
