import React from 'react'
import './routes/layout/layout.scss'
import Navbar from './components/navbar/Navbar'
import ProfilePage from './routes/profilePage/profilePage'
import SinglePage from './routes/singlePage/singlePage'
import HomePage from './routes/homePage/homePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './routes/listPage/listPage'
import Layout from './routes/layout/layout';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
    {
      path: "/",
      element:<HomePage/>,
    },
    {
      path: "/list",
      element:<ListPage/>,
    },
    {
      path: "/:id",
      element:<SinglePage/>
    },
    {
      path: "/profile",
      element:<ProfilePage/>
    },
  ]
  }
  ]);

  return (
    
    // <div className='layout'>
    // <div className="navbar">
    // <Navbar />
    // </div>
    //   <div className="content">
    //   <HomePage/>
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App
