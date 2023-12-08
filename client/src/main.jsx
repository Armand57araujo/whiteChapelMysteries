import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/index.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <h1 className='errorPage'>Wrong page nerd!</h1>,
    children:[
      {
        index: true,
        element: <Index/>
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
