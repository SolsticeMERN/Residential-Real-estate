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
import ErrorPage from "../Pages/ErrorPage";
import Gallery from "../Pages/Gallery";
import GalleryDetails from "../Pages/GalleryDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
          loader: () => fetch('/Property.json')
        },
        {
          path: "/gallery",
          element: <PrivateRoutes><Gallery></Gallery></PrivateRoutes>,
        },
        {
          path: "/galleryDetails/:id",
          element: <PrivateRoutes><GalleryDetails></GalleryDetails></PrivateRoutes>,
          loader: () => fetch('/Property.json')
        }
      ]
    },
  ]);

  export default router;