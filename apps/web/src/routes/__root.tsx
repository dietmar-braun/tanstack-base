import { createRootRoute, Outlet } from '@tanstack/solid-router'
import Header from '../components/layout/header'

export const Route = createRootRoute({
  component: () => (
    <div>
      <Header />
      <Outlet />
    </div>
  ),
})