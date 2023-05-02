import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import route from './routes/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={route} />
)
