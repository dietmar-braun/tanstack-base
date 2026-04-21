import {createSignal, onMount} from 'solid-js';
import { Link } from '@tanstack/solid-router';
import { BiSolidHome } from 'solid-icons/bi' 
import { VsHome } from 'solid-icons/vs'
import { VsMenu } from 'solid-icons/vs'

 const Navbar = () => {
const [openState, setOpenState] = createSignal(false)
  return (
    <nav class="flex justify-center">
      <VsMenu  />
      <ul class={`${openState === false ? 'hide' : ''}`}>
        <li>
          <Link to="/"><VsHome />Home</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;