import React from 'react';
import { Upload as _Upload } from 'antd';
import { BaseProps } from 'src/types/common';

type UploadProps = {
  name?: string;

  disabled?: boolean;
} & BaseProps;

const Input: React.FC<UploadProps> = props => {
  return <_Upload {...props}></_Upload>;
};

export default Input;
