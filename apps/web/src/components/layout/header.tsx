import {config} from '../../config.ts'
import Navbar from './navBar.tsx';

const Header = () => {
  return (
    <header class="border-b-2  border-solid p-12 mb-12 bg-conic-210 bg-amber-50 flex flex-row ">
      <div class="">
        
        <p class="text-3xl font-stretch-50% font-semibold">{config.app.title}</p>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;