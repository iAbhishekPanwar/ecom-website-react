import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  }, [token, email]);

  function loginHandler(token, email) {
    setToken(token);
    setEmail(email);
  }

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const addToCartHandler = async (product) => {
    try {
      const sanitizedEmail = email.replace(/[@.]/g, "");
      const response = await fetch(
        `https://crudcrud.com/api/6e08168d573b435a94354da81d16a860/cart/${sanitizedEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product to cart.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCartItems = async () => {
    try {
      const sanitizedEmail = email.replace(/[@.]/g, "");
      const response = await fetch(
        `https://crudcrud.com/api/6e08168d573b435a94354da81d16a860/cart/${sanitizedEmail}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart items.");
      }

      const cartItems = await response.json();
      console.log("Cart Items:", cartItems);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    addToCart: addToCartHandler,
    getCartItems: getCartItems,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
