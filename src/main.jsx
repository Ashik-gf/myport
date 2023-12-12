import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayOut from './MainLayout/MainLayOut.jsx';
import Home from './Pages/Home/Home.jsx';
import Contact from './component/Navbar/Contact.jsx';
import About from './component/Navbar/About.jsx';
import Card from './component/Card/Card';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('../public/data.json')
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/card',
        element: <Card></Card>,
        loader: ()=> fetch('../public/data.json')
      }
    ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
   <div className=' max-w-6xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  
)
