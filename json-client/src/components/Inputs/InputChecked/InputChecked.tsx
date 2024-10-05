import { GeneralProps } from "@/src/entities/entities";
import React from "react";

interface InputCheckedProps extends GeneralProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputChecked = ({
  id,
  label,
  name,
  value,
  onChange,
}: InputCheckedProps): JSX.Element => {
  return (
    <div className="flex flex-row gap-2">
      <input
        id={id}
        type="checkbox"
        value={value}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
    </div>
  );
};
