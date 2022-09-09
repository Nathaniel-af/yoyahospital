import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Doctors from "./pages/Doctors";
import { ContextProvider } from "./components/Context";
import Aboutus from "./pages/aboutus";
function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
