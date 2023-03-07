import React from "react";
import { Input as _Input } from "antd";
import { BaseProps } from "src/types/common";

type InputProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
} & BaseProps;

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  disabled = false,
  style,
}) => {
  return (
    <_Input
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      style={style}
    ></_Input>
  );
};

export default Input;
