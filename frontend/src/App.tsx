import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar position="top" tabs={["Home", "Inventory", "About"]} />

      <div className="outlet">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
