import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import { BrowserRouter , Route , Routes } from "react-router-dom";

import AddItem from "./pages/AddItem";
import ListItem from "./pages/ListItem";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





const App = () => {
  return (
    <div>
      <BrowserRouter>

     
      <ToastContainer />
       <Navbar />
        <hr className="border-2 "/>

           <div className="flex">
              <Sidebar />
               <Routes>
                 <Route path="/add"  element={<AddItem />} />
                 <Route path="/list"  element={<ListItem/>} />
                 <Route path="/orders"  element={<Orders/>} />

               </Routes>
           </div>


        </BrowserRouter>
    </div>
  )
}

export default App