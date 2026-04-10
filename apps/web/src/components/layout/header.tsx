import {config} from '../../config'

const Header = () => {
  return (
    <header>
      <p>{config.app.title}</p>
    </header>
  );
};

export default Header;