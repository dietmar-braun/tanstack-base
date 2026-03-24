import { RouterProvider } from '@tanstack/solid-router'
import { router } from './router'

import './App.css'

function App() {
  return <RouterProvider router={router} />
}

export default App
