import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout'
import About from './pages/about'
import Restaurants from './pages/restaurants'
import Restaurant from './pages/restaurant'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:
    [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Restaurants',
        children: [
          {
            path: '',
            element: <Restaurants />
          },
          {
            path: ':id',
            element: <Restaurant />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
