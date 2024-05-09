import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import StoreContextProvider from "./context/StoreContext.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import AuthPopup from "./components/AuthPopup.jsx";
import Page404 from "./pages/Page404.jsx";

function App() {


  const [showAuthForm , setShowAuthForm] = useState(false);

  return (
    <>
      <BrowserRouter>

         

      <StoreContextProvider>
        
          {showAuthForm ? <AuthPopup setShowAuthForm={setShowAuthForm} /> : <></>}

         <Navbar setShowAuthForm = {setShowAuthForm} />

            <Routes>
               <Route  path ='/'  element={<Home />} />
              
               <Route  path ='/cart'  element={<Cart />} />
               <Route  path ='*'  element={<Page404 />} />

         
            </Routes>

              <Footer />
            </StoreContextProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
