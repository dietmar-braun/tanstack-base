import {createSignal, onMount} from 'solid-js'
import { Link } from '@tanstack/solid-router'
import MenuIcon from '@mui/icons-material/Menu';

 const Navbar = () => {
  return (
    <nav>
      <MenuIcon />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;