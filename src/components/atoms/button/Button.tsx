import React, { Children } from 'react';
import { Button as _Button } from 'antd';
import { ButtonType } from 'antd/es/button';
import { BaseProps } from 'src/types/common';

type ButtonProps = {
  text?: string;
  disabled?: boolean;
  type?: ButtonType;
  loading?: boolean;
  onClick?: any;
} & BaseProps;

const Button: React.FC<ButtonProps> = props => {
  return <_Button {...props}>{props.children ? props.children : <span>{props.text}</span>}</_Button>;
};

export default Button;
