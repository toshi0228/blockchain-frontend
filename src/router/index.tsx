import { Route, Routes } from "react-router-dom";
import * as React from "react";
import { publicRoutes } from "./publicRouter";

const RouteList = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        return <Route key={index.toString()} path={route.path} element={<route.page />} />;
      })}
    </Routes>
  );
};

export default RouteList;
