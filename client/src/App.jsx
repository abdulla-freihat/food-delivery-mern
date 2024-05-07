import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import StoreContextProvider from "./context/StoreContext.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
      <StoreContextProvider>
        
         <Navbar />

            <Routes>
               <Route  path ='/'  element={<Home />} />
              
               <Route  path ='/cart'  element={<Cart />} />
         
            </Routes>

              <Footer />
            </StoreContextProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
