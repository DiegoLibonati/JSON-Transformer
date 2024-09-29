import React, { Fragment, useContext, useEffect } from "react";

import { LoaderDocument } from "@/src/components/Loaders/export";
import { FormUploadJson } from "@/src/components/Forms/export";
import { AnchorSecondary } from "@/src/components/Anchors/export";

import { JSONContext } from "@/src/contexts/export";
import { MainLayout } from "@/src/layouts/export";
import {
  SectionJsonUploaded,
  SectionPreviewJson,
} from "@/src/containers/export";

import { FaArrowLeft } from "react-icons/fa";

export const LoadJsonPage = (): JSX.Element => {
  const { uploaded, uploading, handleClearJson } = useContext(JSONContext);

  useEffect(() => {
    return () => {
      handleClearJson();
    };
  }, []);

  return (
    <MainLayout
      className={`relative flex flex-col items-center justify-start ${
        (uploading || uploaded) && "justify-center"
      }`}
    >
      {uploading && !uploaded ? (
        <LoaderDocument></LoaderDocument>
      ) : !uploading && uploaded ? (
        <SectionJsonUploaded></SectionJsonUploaded>
      ) : (
        <Fragment>
          <FormUploadJson></FormUploadJson>
          <SectionPreviewJson></SectionPreviewJson>
          <AnchorSecondary
            className="absolute right-2 top-2"
            ariaLabel="Go to Home"
            to="/"
          >
            <FaArrowLeft fontSize={24} className="fill-white"></FaArrowLeft>
          </AnchorSecondary>
        </Fragment>
      )}
    </MainLayout>
  );
};
