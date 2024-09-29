import React, { useContext } from "react";

import { HashRouter } from "react-router-dom";

import { ModalAlert } from "@/src/components/Modals/export";

import { Router } from "@/src/router/export";
import { ModalContext } from "@/src/contexts/export";

const App = (): JSX.Element => {
  const { modal } = useContext(ModalContext);

  return (
    <HashRouter>
      {modal.open && <ModalAlert message={modal.message}></ModalAlert>}
      <Router></Router>
    </HashRouter>
  );
};

export default App;
