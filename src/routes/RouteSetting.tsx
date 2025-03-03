import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Docs from "../pages/Docs";
import MainBusPage from "../pages/temp-danverse/MainBusPage";
import CafeteriaPage from "../pages/temp-danverse/CafeteriaPage";

const RouteSetting = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/temp-danverse/main-bus" element={<MainBusPage />} />
        <Route path="/temp-danverse/cafeteria" element={<CafeteriaPage />} />
    </Routes>
  );
};

export default RouteSetting;
