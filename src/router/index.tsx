import { Route, Routes } from "react-router-dom";
import * as React from "react";
import { routerPublic } from "./public/router.public";

const RouteList = () => {
  return (
    <Routes>
      {routerPublic.map((route, index) => {
        return <Route key={index.toString()} path={route.path} element={<route.page />} />;
      })}
    </Routes>
  );
};

export default RouteList;
