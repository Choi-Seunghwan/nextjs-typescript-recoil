import React from "react";
import { Button as _Button } from "antd";
import { ButtonType } from "antd/es/button";
import { BaseProps } from "src/types/common";

type ButtonProps = {
  text?: string;
  disabled?: boolean;
  type?: ButtonType;
  loading?: boolean;
  clickHandler?: any;
} & BaseProps;

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  clickHandler,
  disabled,
  loading,
}) => {
  return (
    <_Button
      onClick={clickHandler}
      disabled={disabled}
      type={type}
      loading={loading}
    >
      <span>{text}</span>
    </_Button>
  );
};

export default Button;
