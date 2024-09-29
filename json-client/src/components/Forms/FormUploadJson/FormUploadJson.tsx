import React, { useContext, useEffect } from "react";

import { ButtonSubmit } from "@/src/components/Buttons/export";
import { InputField, InputFile } from "@/src/components/Inputs/export";

import { JSONContext, ModalContext } from "@/src/contexts/export";
import { useForm } from "@/src/hooks/export";
import { postGetFileContent, postUploadJson } from "@/src/services/export";

type FormUploadJsonState = {
  jsonName: string;
  jsonFile: File;
};

export const FormUploadJson = (): JSX.Element => {
  const {
    json,
    handleJsonContentUpdate,
    handleJsonUploading,
    handleJsonUploaded,
    handleUpdateJson,
  } = useContext(JSONContext);
  const { handleSetModal } = useContext(ModalContext);

  const { formState, onInputChange, onInputFileChange, onResetForm } =
    useForm<FormUploadJsonState>({
      initialValueForm: {
        jsonName: "",
        jsonFile: null,
      },
    });

  // TODO: ERROR DE BACKS MOSTRAR MODAL
  const onSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    try {
      e.preventDefault();
      handleJsonUploading(true);
      console.log("Submit Form");

      const formData = new FormData();

      const name = formState.jsonName.trim();
      const file = formState.jsonFile;
      const content = json.content;

      if (!name || !file || !content) {
        onResetForm();
        return handleSetModal({
          message: "You must send a valid name, content and file.",
          open: true,
        });
      }

      formData.append("name", name);
      formData.append("file", file);
      formData.append("content", content);

      await postUploadJson(formData);

      handleUpdateJson({ name: name, file: file, content: content });
      handleJsonUploading(false);
      return handleJsonUploaded();
    } catch (e) {
      handleSetModal({ message: e.response.data.message, open: true });
      handleJsonUploading(false);
    }
  };

  const updateFile = async (): Promise<void> => {
    const formData = new FormData();

    formData.append("file", formState.jsonFile);

    const response = await postGetFileContent(formData);

    const data = await response.data;

    return handleJsonContentUpdate(data.content);
  };

  useEffect(() => {
    if (!formState.jsonFile) return;

    updateFile();
  }, [formState.jsonFile]);

  return (
    <form
      className="flex flex-col self-start gap-2 w-full h-auto mb-2 lg:w-[90%]"
      onSubmit={onSubmitForm}
    >
      <InputField
        id="json_name"
        label="JSON Name"
        placeholder="My personal JSON"
        name="jsonName"
        value={formState.jsonName}
        onChange={onInputChange}
      ></InputField>
      <InputFile
        id="json_content"
        label="Upload JSON"
        name="jsonFile"
        value={formState.jsonFile ? formState.jsonFile.name : ""}
        buttonLabel="Select a JSON"
        emptyLabel="No JSON selected"
        accept=".json"
        onChange={onInputFileChange}
      ></InputFile>
      <ButtonSubmit
        ariaLabel="Submit Form Load Json"
        disabled={!formState.jsonName || !formState.jsonFile}
      >
        Upload JSON
      </ButtonSubmit>
    </form>
  );
};
