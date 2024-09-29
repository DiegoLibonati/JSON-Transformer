import React, { useContext, useEffect } from "react";

import { ButtonSubmit } from "@/src/components/Buttons/export";
import { InputField, InputFile } from "@/src/components/Inputs/export";

import { JSONContext } from "@/src/contexts/export";
import { useForm } from "@/src/hooks/export";
import { postGetFileContent, postUploadJson } from "@/src/services/export";

type FormUploadJsonState = {
  jsonName: string;
  jsonFile: File;
};

export const FormUploadJson = (): JSX.Element => {
  const { json, handleJsonContentUpdate } = useContext(JSONContext);

  const { formState, onInputChange, onInputFileChange } =
    useForm<FormUploadJsonState>({
      initialValueForm: {
        jsonName: "",
        jsonFile: null,
      },
    });

  const onSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();
    console.log("Submit Form");

    const formData = new FormData();

    formData.append("name", formState.jsonName);
    formData.append("file", formState.jsonFile);
    formData.append("content", json.content);

    const response = await postUploadJson(formData);

    console.log(response);
    return;
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
      className="flex flex-col gap-2 w-full h-auto mb-2"
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
