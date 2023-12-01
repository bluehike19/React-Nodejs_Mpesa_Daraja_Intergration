import { useContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { DarkModeContext } from "./context/DarkmodeContext";
import Home from "./pages/home/Home";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
