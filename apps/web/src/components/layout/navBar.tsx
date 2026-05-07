import { Link } from '@tanstack/solid-router';
import { SiAboutdotme } from 'solid-icons/si'
import { TiFlashOutline } from 'solid-icons/ti'
import { VsHome } from 'solid-icons/vs'


import {config} from '../../config.ts'

const Navbar = () => {
  return (
    <div class="navbar bg-primary shadow-sm">
      <nav class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-base-300 btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> 
            </svg>
          </div>
          <ul
            tabindex="-1"
            class="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
            <li><Link class="w-full flex flex-row " to="/"><VsHome  class="text-3xl text-center basis-64"/> <span class="basis-128 text-right">Home</span></Link></li>
            <li><Link class="w-full flex flex-row " to="/feature" ><TiFlashOutline  class="text-3xl text-center  basis-64" /><span class="basis-128 text-right">Features</span></Link></li>
            <li><Link class="w-full flex flex-row "to="/about"><SiAboutdotme class="text-6xl basis-64"/><span class="basis-128 text-right">About</span></Link></li>
          </ul>
        </div>
      </nav>
      <div class="navbar-center">
        <Link to="/" class="text-4xl font-header">{config.app.title}</Link>
      </div>
      <div class="navbar-end">
        <button class="btn btn-base-300 btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
        </button>
        
      </div>
    </div>
  )
}

export default Navbar;