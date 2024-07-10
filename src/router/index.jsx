import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/shopping_app",
    element: <Layout />,
    children: [
      {
        path: "/shopping_app",
        element: <Home />
      },
      {
        path: "/shopping_app/product-details",
        element: <ProductDetails />
      },
      {
        path: "/shopping_app/login",
        element: <Login />
      },
      {
        path: "/shopping_app/about-us",
        element: <About />
      }
    ]
  }
]);

export default router;
