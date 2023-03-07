import React from "react";
import { Input as _Input } from "antd";

type InputProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  disabled = false,
}) => {
  return (
    <_Input
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    ></_Input>
  );
};

export default Input;
