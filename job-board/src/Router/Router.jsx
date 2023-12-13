import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import PostJob from "../Pages/PostJob"
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "/", element: <Home/>},
        {
          path: '/post-job',
          element: <PostJob/>
        },
        {
          path: '/my-jobs',
          element: <MyJobs/>
        },
        {
          path:'/edit-job/:id',
          element: <UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
  },
  {
    path: '/sign-up',
    element: <Signup/>
  },
  ]);

  export default router;