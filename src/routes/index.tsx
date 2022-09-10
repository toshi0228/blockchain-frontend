import { Routes, Route } from "react-router-dom";
import * as React from "react";
import Top from "../pages/User/MainPage/Top";
import Setting from "../pages/User/MyPage/Setting";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="about" element={<Setting />} />
    </Routes>
  );
};

export default RouteList;
