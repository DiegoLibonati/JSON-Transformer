import React from "react";

import { Route, Routes } from "react-router-dom";

import { JSONProvider } from "@/src/contexts/export";
import { LoadJsonPage, MenuPage } from "@/src/pages/export";

export const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={"/"} element={<MenuPage></MenuPage>}></Route>
      <Route
        path={"/loadjson"}
        element={
          <JSONProvider>
            <LoadJsonPage></LoadJsonPage>
          </JSONProvider>
        }
      ></Route>
    </Routes>
  );
};
