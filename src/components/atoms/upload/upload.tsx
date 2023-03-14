import React from 'react';
import { UploadFile, Upload as _Upload, Button as _Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { BaseProps } from 'src/types/common';
import styles from './upload.module.scss';

type UploadProps = {
  fileList?: any;
  onChange?: any;
  onPreview?: any;
  disabled?: boolean;
} & BaseProps;

const Upload: React.FC<UploadProps> = props => {
  const maxCount = 1;

  const getUploadClassName = () => {
    return [props?.fileList?.length >= maxCount ? 'hide-btn' : '', 'upload', styles['upload']].join(' ');
  };

  return (
    <>
      <_Upload
        listType="picture"
        beforeUpload={() => false}
        {...props}
        maxCount={maxCount}
        className={getUploadClassName()}
      >
        <_Button icon={<UploadOutlined />}>업로드</_Button>
        {props.children}
      </_Upload>
    </>
  );
};

export default Upload;
