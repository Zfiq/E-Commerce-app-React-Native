import React, { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "../store/cartSlice";
// Passing the cart quantity to the App through Context which fixed the issue.
// Create the context
const MyContext = createContext();

// Custom provider for the context
export const MyContextProvider = ({ children }) => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <MyContext.Provider value={numberOfItems}>{children}</MyContext.Provider>
  );
};

// Custom hook to access the context value
export const useMyContext = () => {
  return useContext(MyContext);
};
