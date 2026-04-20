import {createSignal, onMount} from 'solid-js';
import { Link } from '@tanstack/solid-router';
import { BiSolidHome } from 'solid-icons/bi' 
import { VsHome } from 'solid-icons/vs'
import { VsMenu } from 'solid-icons/vs'

 const Navbar = () => {
  return (
    <nav>
      <VsMenu />
      <ul>
        <li>
          <VsHome />
          <Link to="/">Home</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;