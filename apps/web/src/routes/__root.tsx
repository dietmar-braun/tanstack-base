import { onMount } from 'solid-js';
import { createRootRoute, Outlet} from '@tanstack/solid-router'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer.tsx';


export const Route = createRootRoute({
  component: () => {
    onMount(() => {
      document.documentElement.setAttribute('data-theme', 'emerald');
    });
    return (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
    );
  }
})