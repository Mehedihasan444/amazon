import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import EditProfile from "../pages/Dashboard/EditProfile";
import DashboardLayout from "../layouts/DashboardLayout";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/products/:id",
        element: <Product></Product>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
      // console.log(params.id)
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children:[
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path:"/dashboard/Profile",
            element:<Profile></Profile>
          },
          {
            path:"/dashboard/EditProfile",
            element:<EditProfile></EditProfile>
          },
        ]
      },
    ],
  },
]);

export default myCreatedRoute;
