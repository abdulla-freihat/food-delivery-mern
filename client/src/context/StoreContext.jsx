import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);
import axios from "axios";

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:8000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getCartTotalAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);

        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  //fetch food list

  const fetchFoodList = async () => {
    const res = await axios.get(`${url}/api/food/food-list`);

    if (res.data.success) {
      setFoodList(res.data.data);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }

    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getCartTotalAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
