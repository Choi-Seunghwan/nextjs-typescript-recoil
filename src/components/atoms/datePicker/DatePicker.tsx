import { DatePicker as _DatePicker } from 'antd';
import React from 'react';
import { BaseProps } from 'src/types/common';

type DatePickerProps = {
  defaultValue?: any;
  disabled?: boolean;
} & BaseProps;

const DatePicker: React.FC<DatePickerProps> = props => {
  const onChange = (value: any) => {
    console.log('@@', value);
  };

  return <_DatePicker {...props} onChange={onChange} className="date-picker"></_DatePicker>;
};

export default DatePicker;
