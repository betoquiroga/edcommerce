import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductsPage from "./ProductsPage";

export const myRouter = createBrowserRouter([
  {
    element: <App />,
    path: "/"
  },
  {
    element: <ProductsPage />,
    path: "/productos"
  }
])