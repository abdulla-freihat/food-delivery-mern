import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import { BrowserRouter , Route , Routes } from "react-router-dom";



const App = () => {
  return (
    <div>
      <BrowserRouter>

     

       <Navbar />
        <hr className="border-2 "/>

           <div className="">
              <Sidebar />
           </div>


        </BrowserRouter>
    </div>
  )
}

export default App