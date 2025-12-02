import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./Pages/Home"
import Pricing from "./Pages/Pricing"


function App() {
    const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pricing",
      element: <Pricing/>
    },
  ])

  return (
    <>
        <RouterProvider router={Router} />
    </>
  )
}

export default App
