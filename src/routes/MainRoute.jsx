import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../pages/home/HomeLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeLayout />
      }
    ]
  }
]);
