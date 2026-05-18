import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/menu" element={<MenuPage />}/>
      </Routes>
    </main>
  );
}

export default App;
