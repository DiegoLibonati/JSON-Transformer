import { CSSProperties } from "react";

// **** GENERAL ****

export type GeneralProps = Partial<{
  className: string;
  children: React.ReactNode;
  style: CSSProperties;
}>;

export type Json = {
  name: string;
  file: File;
  content: string;
};

export type Modal = {
  message: string;
  open: boolean;
};
