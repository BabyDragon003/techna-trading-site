import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from "./Pages/Home";
import TokemSale from "./Pages/TokemSale";
import AdminPanel from "./Pages/AdminPanel";
import Spot from "./Pages/Spot";
import StakeAndTake from "./Pages/StakeAndTake";
import Futures from "./Pages/Futures";
import Feed from "./Pages/Feed";
import Profile from "./Pages/Profile";
import OptionsBeginners from "./Pages/OptionsBeginners";
import Optiospro from "./Pages/Optionspro";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tokem-sale" element={<TokemSale />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/spot" element={<Spot />} />
      <Route path="/stakeandtake" element={<StakeAndTake />} />
      <Route path="/futures" element={<Futures />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/optionsbeginners" element={<OptionsBeginners />} />
      <Route path="/optionspro" element={<Optiospro />} />
    </Routes>
  );
}
