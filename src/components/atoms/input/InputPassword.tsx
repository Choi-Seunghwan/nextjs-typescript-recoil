import React, { useState } from 'react';
import { Input as _Input } from 'antd';
import { BaseProps } from 'src/types/common';

type InputProps = {
  value?: string;
  onChange?: any;
  placeholder?: string;
  disabled?: boolean;
} & BaseProps;

const InputPassword: React.FC<InputProps> = props => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <_Input.Password
      visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
      {...props}
    ></_Input.Password>
  );
};

export default InputPassword;
