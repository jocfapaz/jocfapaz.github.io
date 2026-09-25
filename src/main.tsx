import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import Contact from './pages/Contact.tsx'
import Root from './core/Root.tsx'
const Root = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <App /> },
      { path: 'users/:userId', element: <Contact /> },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
