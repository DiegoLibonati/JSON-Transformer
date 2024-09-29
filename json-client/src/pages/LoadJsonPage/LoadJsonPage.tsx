import React, { useContext, useEffect } from "react";

import { JSONContext } from "@/src/contexts/export";
import { FormUploadJson } from "@/src/components/Forms/export";
import { MainLayout } from "@/src/layouts/export";
import { SectionPreviewJson } from "@/src/containers/export";

export const LoadJsonPage = (): JSX.Element => {
  const { handleClearJson } = useContext(JSONContext);

  useEffect(() => {
    return () => {
      handleClearJson();
    };
  }, []);

  return (
    <MainLayout className="flex flex-col items-center justify-start">
      <FormUploadJson></FormUploadJson>
      <SectionPreviewJson></SectionPreviewJson>
    </MainLayout>
  );
};
