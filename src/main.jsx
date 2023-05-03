import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import route from './routes/Route'

ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
        <RouterProvider router={route}>
        </RouterProvider>
    </AuthProvider>
)