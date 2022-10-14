import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import ProductsPage from "./ProductsPage";

export const myRouter = createBrowserRouter([
  {
    element: <App />,
    path: "/"
  },
  {
    element: <ProductsPage />,
    path: "/productos"
  },
  {
    element: <Login />,
    path: "/login"
  } 
])