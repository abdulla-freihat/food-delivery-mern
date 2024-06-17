import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedAdminLayout from "./components/ProtectedAdminLayout";
import AddItem from "./pages/AddItem";
import ListItem from "./pages/ListItem";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import ProtectedAdminAuth from "./components/ProtectedAdminAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
       <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<ProtectedAdminAuth><ProtectedAdminLayout /></ProtectedAdminAuth>}>
            <Route path="add" element={<AddItem />} />
            <Route path="list" element={<ListItem />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
};

export default App;
