import React, { useContext, useEffect } from "react";

import { LoaderSpinner } from "@/src/components/Loaders/export";
import { ButtonSubmit } from "@/src/components/Buttons/export";
import { InputField, InputFile } from "@/src/components/Inputs/export";

import { JSONContext, ModalContext } from "@/src/contexts/export";
import { FormEditorLayout } from "@/src/layouts/export";
import { useForm, useRouter } from "@/src/hooks/export";
import { postGetFileContent, postUploadJson } from "@/src/services/export";

type InitialValueForm = {
  jsonName: string;
  jsonFile: File;
};

export const LoadJsonPage = (): JSX.Element => {
  const {
    loading,
    inputJson,
    handleClearJson,
    handleInputJsonContentUpdate,
    handleUpdateInputJson,
    handleLoading,
  } = useContext(JSONContext);
  const { handleSetModal } = useContext(ModalContext);

  const { handleNavigateToResolution } = useRouter();

  const { formState, onInputChange, onInputFileChange, onResetForm } =
    useForm<InitialValueForm>({
      initialValueForm: {
        jsonName: "",
        jsonFile: null,
      },
    });

  const onSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    try {
      e.preventDefault();
      handleLoading(true);
      console.log("Submit Form");

      const formData = new FormData();

      const name = formState.jsonName.trim();
      const file = formState.jsonFile;
      const content = inputJson.content;

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

      const response = await postUploadJson(formData);

      const data = response.data.data;

      handleUpdateInputJson({
        id: data.json.id,
        name: name,
        file: file,
        content: content,
        keys: [],
      });
      handleLoading(false);
      return handleNavigateToResolution("uploaded", `name=${name}`);
    } catch (e) {
      handleSetModal({ message: e.response.data.message, open: true });
      handleLoading(false);
    }
  };

  const updateFile = async (): Promise<void> => {
    try {
      const formData = new FormData();

      formData.append("file", formState.jsonFile);

      const response = await postGetFileContent(formData);

      const data = await response.data;

      return handleInputJsonContentUpdate(data.content);
    } catch (e) {
      handleSetModal({ message: e.response.data.message, open: true });
    }
  };

  useEffect(() => {
    return () => {
      handleClearJson();
    };
  }, []);

  useEffect(() => {
    if (!formState.jsonFile) return;

    updateFile();
  }, [formState.jsonFile]);

  return (
    <FormEditorLayout
      onSubmit={onSubmitForm}
      LoadingComponent={() => <LoaderSpinner></LoaderSpinner>}
      jsonTypeToEdit="input"
      loading={loading}
    >
      <InputField
        id="json_name"
        label="JSON Name"
        placeholder="My personal JSON"
        name="jsonName"
        value={formState.jsonName}
        className="lg:bg-primary"
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
        spanClassName="lg:bg-primary"
        onChange={onInputFileChange}
      ></InputFile>
      <ButtonSubmit
        ariaLabel="Submit Form Load Json"
        className="lg:bg-primary"
        disabled={!formState.jsonName || !formState.jsonFile}
      >
        Upload JSON
      </ButtonSubmit>
    </FormEditorLayout>
  );
};
