import React from "react";

import { AnchorAction } from "@/src/components/Anchors/export";

export const SectionActions = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 w-[75%] h-full">
      <AnchorAction to="/loadjson" ariaLabel="Go to Load JSON">
        Load JSON
      </AnchorAction>
    </section>
  );
};
