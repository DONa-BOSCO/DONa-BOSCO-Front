import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router/router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import 'react-bootstrap' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <UserProvider >
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
