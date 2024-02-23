import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:
      [
        {path:"",
        element: <Home/>
        },
        {
          path:"About",
          element: <About/>
        },
        {
          path:"Contact",
          element:<Contact/>
        },
        {
          path: 'user/:userid',
          element:<User/>
        }

      ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
