import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Header from "./components/Menu/menu";
import Footer from "./components/Footer/footer";
import Navbar from "./components/navbar/navbar";
import Menu from "./components/Menu/menu";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import './styles/global.scss'
import User from "./pages/user/user";
import Product from "./pages/product/product";

function App() {
  const Layout = () => {
      return (
        <div className="main">
            <Navbar />
            <div className="container">
                <div className="menuContainer">
                    <Menu />
                </div>
                <div className="contentContainer">
                  <Outlet />
                </div>
            </div>
            <Footer />
        </div>
      ) 
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/users",
          element: <Users />
        }, 
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products/:id",
          element: <Product />
        }
      ]
    }
    
  ])
  return <RouterProvider router={router}/>
}

export default App
