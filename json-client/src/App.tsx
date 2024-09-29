import React from "react";

import { HashRouter } from "react-router-dom";

import { Router } from "@/src/router/export";

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Router></Router>
    </HashRouter>
  );
};

export default App;
