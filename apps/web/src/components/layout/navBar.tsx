import {createSignal, onMount, Show} from 'solid-js';
import { Link } from '@tanstack/solid-router';
import { VsChromeClose } from 'solid-icons/vs';
import { VsHome } from 'solid-icons/vs'
import { VsMenu } from 'solid-icons/vs'

const Navbar = () => {
  const [openState, setOpenState] = createSignal<boolean>(false)
  return (
    <nav class="flex justify-center">
      <div class="">
        <ul class={`${openState() === false ? 'hide' : ''}`}>
          <li>
            <Link to="/"><VsHome class="inline"/>Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
      <Show when={openState() === false}>
        <VsMenu onClick={() => {setOpenState(true)}}/>
      </Show>
      <Show when={openState() === true}>
        <VsChromeClose onClick={() => {setOpenState(false)}}/>
      </Show>
    </nav>
  )
}

export default Navbar;