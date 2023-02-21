import React from 'react'
import './App.css'
import Login from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/main-page'
import DetailPage from './pages/detail-page'
import Profile from './pages/profile'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: 'detail/:id',
      element: <DetailPage />
    },
    {
      path: '/profile',
      element: <Profile />,
    },
  ])

  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
