import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import UpdateProfile from "../Pages/UpdateProfile";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import About from "../Components/About";
import Agents from "../Components/Agents";
import EstateDetails from "../Components/EstateDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/profile",
            element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/footer",
            element: <Footer></Footer>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/agents",
          element: <Agents></Agents>
        },
        {
          path: "/details/:id",
          element: <EstateDetails></EstateDetails>,
          loader: () => fetch('/public/estate.json')
        }
      ]
    },
  ]);

  export default router;