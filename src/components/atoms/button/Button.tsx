import React from "react";
import { Button as _Button } from "antd";
import { ButtonType } from "antd/es/button";

type ButtonProps = {
  text: string;
  disabled: boolean;
  type: ButtonType;
  loading: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, type, disabled, loading }) => {
  return (
    <_Button disabled={disabled} type={type} loading={loading}>
      <span>{text}</span>
    </_Button>
  );
};

export default Button;
