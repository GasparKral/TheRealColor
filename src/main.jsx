import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { ReducerProvider } from './hooks/Context.jsx'

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReducerProvider>
    <RouterProvider router={router} />
  </ReducerProvider>,
)
