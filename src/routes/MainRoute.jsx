import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../pages/home/HomeLayout";
import LogInPage from "../pages/authenticationPages/LogInPage";
import RegistrationPage from "../pages/authenticationPages/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/myToys/MyToys";
import AddToy from "../pages/AddToy";
import Blogs from "../pages/Blogs";
import ProtectedRoute from "./ProtectedRoute";
import SingleToy from "../pages/SingleToy";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeLayout />
      },
      {
        path: '/all-toys',
        element: <AllToys />
      },
      {
        path: '/single-toy/:id',
        element: <ProtectedRoute><SingleToy /></ProtectedRoute>,
        loader: ({ params }) => fetch(`https://heroic-toys-server.vercel.app/product/${params.id}`)
      },
      {
        path: '/my-toys',
        element: <ProtectedRoute><MyToys /></ProtectedRoute>
      },
      {
        path: '/add-toy',
        element: <ProtectedRoute><AddToy /></ProtectedRoute>
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/log-in',
        element: <LogInPage />
      },
      {
        path: '/registration',
        element: <RegistrationPage />
      }
    ]
  }
]);
