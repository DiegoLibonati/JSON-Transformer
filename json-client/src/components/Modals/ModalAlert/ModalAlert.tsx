import React, { useContext } from "react";

import { GeneralProps } from "@/src/entities/entities";

import { ButtonSecondary } from "@/src/components/Buttons/export";
import { Modal } from "@/src/components/Modals/export";

import { ModalContext } from "@/src/contexts/export";

import { FaInfoCircle } from "react-icons/fa";

interface ModalAlertProps extends GeneralProps {
  message: string;
}

export const ModalAlert = ({ message }: ModalAlertProps): JSX.Element => {
  const { handleSetModalClose } = useContext(ModalContext);

  return (
    <Modal>
      <div className="flex flex-col items-center justify-center gap-2 w-full h-auto">
        <div className=" bg-primary bg-opacity-20 rounded-full p-2">
          <FaInfoCircle fontSize={24} className="fill-secondary"></FaInfoCircle>
        </div>
        <p className="w-full text-center text-secondary text-sm">{message}</p>
      </div>
      <ButtonSecondary
        className="self-end"
        ariaLabel="Close Modal"
        onClick={handleSetModalClose}
      >
        Close
      </ButtonSecondary>
    </Modal>
  );
};
