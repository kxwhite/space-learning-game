import { createContext, useState } from "react";

export const NavData = createContext();

function NavContext({ children }) {
    const [header, setHeader] = useState("");
  
    return (
      <NavData.Provider value={{ header, setHeader }}>
        {children}
      </NavData.Provider>
    );
  }

export default NavContext;