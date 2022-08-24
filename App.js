import BottomNav from "./Pages/BottomNav";
import Header from "./Pages/Header";
import About from "./Pages/About";
import React, { useState, createContext, useEffect } from "react";


export const UserContext = createContext();
const App = () => {
  const [user, setUser] = useState("Anand");


  return (
    <UserContext.Provider value={user}>
      <Header />
      <About />
      <BottomNav />
    </UserContext.Provider>
  );
};
export default App;
