import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";

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
        path: "/shopping_app/user",
        element: <Login />
      }
    ]
  }
]);

export default router;
