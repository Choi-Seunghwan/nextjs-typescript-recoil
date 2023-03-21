import React from 'react';
import { Input as _Input } from 'antd';
import { BaseProps } from 'src/types/common';

type InputProps = {
  value?: string;
  name?: string;
  onChange?: any;
  placeholder?: string;
  disabled?: boolean;
} & BaseProps;

const Input: React.FC<InputProps> = props => {
  return <_Input {...props}></_Input>;
};

export default Input;
