import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import ProductForm from "./ProductForm";
import ProductPage from "./ProductPage";
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
  },
  {
    element: <ProductForm />,
    path: "/productos/crear"
  },
  {
    element: <ProductPage />,
    path: "/productos/:id"
  } 
])