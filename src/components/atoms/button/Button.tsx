import React from 'react';
import { Button as _Button } from 'antd';
import { ButtonType } from 'antd/es/button';
import { BaseProps } from 'src/types/common';

type ButtonProps = {
  text?: string;
  disabled?: boolean;
  type?: ButtonType;
  loading?: boolean;
  clickHandler?: any;
} & BaseProps;

const Button: React.FC<ButtonProps> = props => {
  return (
    <_Button {...props}>
      <span>{props.text}</span>
    </_Button>
  );
};

export default Button;
