import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import SingleProduct from "./pages/Shop/SingleProduct.jsx";
import About from "./pages/AboutPage/About.jsx";
import Contact from "./pages/ContactPage/Contact.jsx";
import CartPage from "./pages/Shop/CartPage.jsx";
import CheckoutPage from "./pages/Shop/CheckoutPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import appStore from "./configRedux/appStore.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/check-out",
    element: <CheckoutPage />,
  }, 
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);