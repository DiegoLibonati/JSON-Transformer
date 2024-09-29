import React from "react";

import { GeneralProps } from "@/src/entities/entities.d";

interface ButtonSubmitProps extends GeneralProps {
  ariaLabel: string;
  disabled?: boolean;
}

export const ButtonSubmit = ({
  ariaLabel,
  disabled,
  children,
}: ButtonSubmitProps): JSX.Element => {
  return (
    <button
      className="w-full h-10 text-white bg-secondary rounded-lg transition-all hover:bg-tertiary hover:font-semibold disabled:bg-lightGrey disabled:cursor-not-allowed disabled:text-black disabled:font-normal"
      type="submit"
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
