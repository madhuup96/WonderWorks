import { createContext, useEffect, useState } from "react";
import { articles_list } from "../assets/assets";
import Cart from "../Pages/Cart/Cart";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartArticles, setCartArticles] = useState({});

  const addToCart = (articlesId) => {
    if (!cartArticles[articlesId]) {
      setCartArticles((prev) => ({ ...prev, [articlesId]: 1 }));
    } else {
      setCartArticles((prev) => ({
        ...prev,
        [articlesId]: prev[articlesId] + 1,
      }));
    }
  };

  const removeFromCart = (articlesId) => {
    setCartArticles((prev) => ({
      ...prev,
      [articlesId]: prev[articlesId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartArticles) {
      if (cartArticles[item] > 0) {
        let articleInfo = articles_list.find((product) => product._id === item);
        totalAmount += articleInfo.price * cartArticles[item];
      }
    }
    return totalAmount;
  };
  const contextValue = {
    articles_list,
    cartArticles,
    setCartArticles,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
