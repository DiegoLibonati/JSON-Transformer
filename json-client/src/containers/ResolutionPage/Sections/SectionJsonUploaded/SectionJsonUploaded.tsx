import React from "react";

import { AnchorAction } from "@/src/components/Anchors/export";

import { FaCheckCircle } from "react-icons/fa";

interface SectionJsonUploadedProps {
  jsonName: string;
}

export const SectionJsonUploaded = ({
  jsonName,
}: SectionJsonUploadedProps): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-2">
      <FaCheckCircle fontSize={48} className="fill-white"></FaCheckCircle>
      <p className="text-white text-lg">
        JSON: <span className="font-semibold">{jsonName}</span> successfully
        uploaded!
      </p>
      <AnchorAction noMark={true} ariaLabel="Go to Home" to="/">
        Home
      </AnchorAction>
    </section>
  );
};
