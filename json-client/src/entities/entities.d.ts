import { CSSProperties } from "react";

// **** GENERAL ****

export type GeneralProps = Partial<{
  className: string;
  children: React.ReactNode;
  style: CSSProperties;
}>;

export type InputJson = {
  id: string;
  name: string;
  file: File;
  content: string;
  keys: string[];
};

export type OutputJson = {
  id: string;
  name: string;
  model: string;
};

export type Modal = {
  message: string;
  open: boolean;
};

export type Resolution = "uploaded";
