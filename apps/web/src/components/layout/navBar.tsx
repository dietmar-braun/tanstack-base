import {createSignal, onMount} from 'solid-js';
import { Link } from '@tanstack/solid-router';

import { VsMenu } from 'solid-icons/vs'
 const Navbar = () => {
  return (
    <nav>
      <VsMenun />
      <ul>
        <li>
      
          <Link to="/">Home</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;