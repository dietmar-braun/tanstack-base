import {createSignal, onMount, Show} from 'solid-js';
import { Link } from '@tanstack/solid-router';

import { VsHome } from 'solid-icons/vs'
import { VsMenu } from 'solid-icons/vs'

const Navbar = () => {
  const [openState, setOpenState] = createSignal<boolean>(false)
  return (
    <nav class="flex justify-center">
      
      
      <ul class={`${openState() === false ? 'hide' : ''}`}>
        <li>
          <Link to="/"><VsHome class="inline"/>Home</Link>
        </li>
      </ul>
      
      <Show when={openState() === false}>
        <VsMenu onClick={() => {setOpenState(true)}}/>
      </Show>
    </nav>
  )
}

export default Navbar;