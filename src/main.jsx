import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
import Users from './assets/components/Users/Users.jsx';
import UserDeatails from './assets/components/UserDeatils/UserDeatails.jsx';
import Posts from './assets/components/Posts/Posts.jsx';
import PostDeatils from './assets/components/postDeatils/PostDeatils.jsx';

// import Contact from './assets/components/contact/contact.jsx';


const router = createBrowserRouter([
  {
  path: '/',
  element: <Home></Home>,
  children:[
    {
      path: '/about', 
      element:<About></About>
    },
    // {
    //   path: '/contact', 
    //   element:<Contact></Contact>
    // },
    {
      path: '/user/Id', 
      element:<UserDeatails></UserDeatails>
    },
    {
      path:'/users',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:'/posts',
      loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    },
    {
      path: '/post/:postId',
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostDeatils></PostDeatils>
    }
  ]
},

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
