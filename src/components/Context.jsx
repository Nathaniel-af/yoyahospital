import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const Physicians = createContext();

export function ContextProvider({ children }) {
  const [doctors, setDoctors] = useState();
  useEffect(() => {
    async function callapi() {
      await axios.get(`${import.meta.env.VITE_API}physicians/`).then((res) => {
        setDoctors(res.data);
        localStorage.setItem("physician", JSON.stringify(res.data));
      });
    }
    callapi();
  }, []);

  return (
    <Physicians.Provider value={{ doctors }}>{children}</Physicians.Provider>
  );
}

export function Context() {
  return useContext(Physicians);
}
