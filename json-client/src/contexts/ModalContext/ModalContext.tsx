import React, { Reducer, createContext, useEffect, useReducer } from "react";

import { Modal } from "@/src/entities/entities";
import { ModalAction, ModalState } from "@/src/entities/modal-context.d";

import {
  initialState,
  reducer,
} from "@/src/contexts/ModalContext/reducer/reducer";

interface ModalContextProps {
  modal: Modal;
  handleSetModal: (modal: Modal) => void;
  handleSetModalClose: () => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

export const ModalProvider: React.FunctionComponent<ModalProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<ModalState, ModalAction>>(
    reducer,
    initialState
  );

  const handleSetModal = (modal: Modal): void => {
    return dispatch({
      type: "SET_MODAL",
      payload: { message: modal.message, open: modal.open },
    });
  };

  const handleSetModalClose = (): void => {
    return dispatch({
      type: "SET_MODAL",
      payload: { message: "", open: false },
    });
  };

  useEffect(() => {
    if (state.modal.open) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }, [state.modal.open]);

  return (
    <ModalContext.Provider
      value={{
        modal: state.modal,
        handleSetModal: handleSetModal,
        handleSetModalClose: handleSetModalClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
