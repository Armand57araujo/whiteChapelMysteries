import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/index.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Saves from './pages/SavePage.jsx'
import Office from './pages/Office.jsx'
import MitreSquare from './pages/MitreSquare.jsx'
import DruwardStreet from './pages/DruwardStreet.jsx'
import HanburyStreet from './pages/HanburyStreet.jsx'
import DorsetStreet from './pages/DorsetStreet.jsx'
import DutfieldYard from './pages/DutfieldYard.jsx'
import Wharf from './pages/Wharf.jsx'
// import * as serviceWorker from './serviceWorker';

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
        path: '/aboutus',
        element: <AboutUs />
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
// serviceWorker.register();