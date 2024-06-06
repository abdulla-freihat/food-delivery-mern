import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import StoreContextProvider from "./context/StoreContext.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import AuthPopup from "./components/AuthPopup.jsx";
import Page404 from "./pages/Page404.jsx";
import Order from "./pages/order/Order.jsx";
import VerifyOrder from "./pages/verify/VerifyOrder.jsx";
import MyOrders from "./pages/myOrders/MyOrders.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [showAuthForm, setShowAuthForm] = useState(false);

  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <StoreContextProvider>
          {showAuthForm ? (
            <AuthPopup setShowAuthForm={setShowAuthForm} />
          ) : (
            <></>
          )}

          <Navbar setShowAuthForm={setShowAuthForm} />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/verify" element={<VerifyOrder />} />
            <Route path="/my-orders" element={<MyOrders />} />

            <Route path="*" element={<Page404 />} />
          </Routes>

          <Footer />
        </StoreContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
