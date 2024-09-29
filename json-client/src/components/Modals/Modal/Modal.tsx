import React from "react";

import { GeneralProps } from "@/src/entities/entities";

interface ModalProps extends GeneralProps {}

export const Modal = ({ children }: ModalProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center absolute top-0 z-10 h-screen w-screen bg-black bg-opacity-45">
      <div className="flex flex-col items-center justify-between gap-2 w-[90%] h-[12rem] bg-white rounded-lg p-2 shadow-sm lg:w-[20rem]">
        {children}
      </div>
    </div>
  );
};
