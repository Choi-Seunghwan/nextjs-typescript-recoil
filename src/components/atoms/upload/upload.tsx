import React from 'react';
import { Upload as _Upload } from 'antd';
import { BaseProps } from 'src/types/common';

type UploadProps = {
  onChange?: any;
  disabled?: boolean;
} & BaseProps;

const Upload: React.FC<UploadProps> = props => {
  return <_Upload {...props}>{props.children}</_Upload>;
};

export default Upload;
