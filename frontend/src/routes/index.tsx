import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Inventory from "../pages/Inventory/Inventory";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default AppRoutes;
