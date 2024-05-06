import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
function App() {

  return (
    <>
      <BrowserRouter>
        
         <Navbar />

            <Routes>
               <Route  path ='/'  element={<Home />} />
              
               <Route  path ='/cart'  element={<Cart />} />
         
            </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
