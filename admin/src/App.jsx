import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedAdminLayout from "./components/ProtectedAdminLayout";
import AddItem from "./pages/AddItem";
import ListItem from "./pages/ListItem";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin' element={<ProtectedAdminLayout />}>
            <Route path="add" element={<AddItem />} />
            <Route path="list" element={<ListItem />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
