import Navbar from "./components/Navbar"
import { BrowserRouter , Route , Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>

     

       <Navbar />
        <hr className="border-2 "/>

       


        </BrowserRouter>
    </div>
  )
}

export default App