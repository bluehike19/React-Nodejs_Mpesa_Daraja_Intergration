import { useContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { DarkModeContext } from "./context/DarkmodeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
    </div>
  );
}

export default App;
