import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TaskProvider } from './hooks/Context.jsx'

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <RouterProvider router={router} />
  </TaskProvider>
)
