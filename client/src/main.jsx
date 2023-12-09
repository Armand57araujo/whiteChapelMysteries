import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <h1 className='errorPage'>Wrong page nerd!</h1>,
    children:[
      {
        index: true,
        element: <Index/>
      },{
        path: '/login',
        element: <Login />
      },{
        path: '/signup',
        element: <Signup />
      },{
        path: '/saves',
        element: <Saves />
      },{
        path: '/office',
        element: <Office />
      },{
        path: '/mitresquare',
        element: <MitreSquare />
      },{
        path: '/druwardstreet',
        element: <DruwardStreet />
      },{
        path: '/hanburystreet',
        element: <HanburyStreet />
      },{
        path: '/dorsetstreet',
        element: <DorsetStreet />
      },{
        path: '/dutfieldyard',
        element: <DutfieldYard />
      },{
        path: '/wharf',
        element: <Wharf/>
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
