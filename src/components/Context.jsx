import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const Physicians = createContext();

export function ContextProvider({ children }) {
  // const [doctors, setDoctors] = useState();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState();
  useEffect(() => {
    async function callapi() {
      await axios.get(`${import.meta.env.VITE_API}physicians/`).then((res) => {
        // setDoctors(res.data);
        localStorage.setItem("physician", JSON.stringify(res.data));
      });
    }
    async function blogapi() {
      await axios
        .get(`${import.meta.env.VITE_API}blog/`)
        .then((res) => {
          setLoading(false);
          // setBlog(res.data);
          localStorage.setItem("blog", JSON.stringify(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    blogapi();
    callapi();
  }, []);

  return (
    <Physicians.Provider value={{ blog, loading }}>
      {children}
    </Physicians.Provider>
  );
}

export function Context() {
  return useContext(Physicians);
}
