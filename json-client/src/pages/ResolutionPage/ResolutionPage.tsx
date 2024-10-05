import React, { useEffect, useState } from "react";

import { MainLayout } from "@/src/layouts/export";
import { SectionJsonUploaded } from "@/src/containers/export";
import { useRouter } from "@/src/hooks/export";

export const ResolutionPage = (): JSX.Element => {
  const [availablesIds] = useState<string[]>(["uploaded"]);

  const { params, searchParams, handleNavigateToHome } = useRouter();

  const { resolution } = params;

  useEffect(() => {
    if (
      !resolution ||
      !availablesIds.includes(resolution.toLocaleLowerCase().trim())
    )
      return handleNavigateToHome();
  }, [resolution]);

  return (
    <MainLayout className="flex items-center justify-center">
      {resolution.trim().toLocaleLowerCase() === "uploaded" && (
        <SectionJsonUploaded
          jsonName={searchParams.get("name") || "unkwonk"}
        ></SectionJsonUploaded>
      )}
    </MainLayout>
  );
};
