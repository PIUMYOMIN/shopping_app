import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ProductDetails from "./../pages/ProductDetails";

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
      }
    ]
  }
]);

export default router;
