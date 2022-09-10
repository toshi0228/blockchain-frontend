import { Route, Routes } from "react-router-dom";
import * as React from "react";
import { publicRoutes } from "./publicRoutes";

const RouteList = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route path={route.path} element={<route.page />} />;
      })}
    </Routes>
  );
};

export default RouteList;
