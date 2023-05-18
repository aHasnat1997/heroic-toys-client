import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../pages/home/HomeLayout";
import LogInPage from "../pages/authenticationPages/LogInPage";
import RegistrationPage from "../pages/authenticationPages/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import AddToy from "../pages/AddToy";
import Blogs from "../pages/Blogs";

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
        element: <AllToys />,
        loader: () => fetch('https://heroic-toys-server.vercel.app/all-products')
      },
      {
        path: '/my-toys',
        element: <MyToys />
      },
      {
        path: '/add-toy',
        element: <AddToy />
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
