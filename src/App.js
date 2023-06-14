import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
import Offers from "./components/Offers";
import Help from "./components/Help";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Error from "./components/Error";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

// call createBrowserRouter for routing different pages
export const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <App />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);




export default App;
