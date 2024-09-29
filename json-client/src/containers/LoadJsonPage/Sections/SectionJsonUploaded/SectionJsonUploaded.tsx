import React, { useContext } from "react";

import { AnchorAction } from "@/src/components/Anchors/export";
import { JSONContext } from "@/src/contexts/export";

import { FaCheckCircle } from "react-icons/fa";

export const SectionJsonUploaded = (): JSX.Element => {
  const { json } = useContext(JSONContext);

  return (
    <section className="flex flex-col items-center justify-center gap-2">
      <FaCheckCircle fontSize={48} className="fill-white"></FaCheckCircle>
      <p className="text-white text-lg">
        JSON: <span className="font-semibold">{json.name}</span> successfully
        uploaded!
      </p>
      <AnchorAction noMark={true} ariaLabel="Go to Home" to="/">
        Home
      </AnchorAction>
    </section>
  );
};
