import { onMount } from 'solid-js';
import { createRootRoute, Outlet} from '@tanstack/solid-router'
import Header from '../components/layout/header'


export const Route = createRootRoute({
  component: () => {
    onMount(() => {
      document.documentElement.setAttribute('data-theme', 'dim');
    });
    return (
        <div>
          <Header />
          <Outlet />
        </div>

    );
  }
})