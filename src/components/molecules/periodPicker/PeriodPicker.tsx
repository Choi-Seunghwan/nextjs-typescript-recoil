import { DatePicker as _DatePicker } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import { BaseProps } from 'src/types/common';
import styles from './period-picker.module.scss';

type PeriodPicker = {
  defaultValue?: any;
  disabled?: boolean;
} & BaseProps;

const PeriodPicker: React.FC<PeriodPicker> = props => {
  const startDateOnchange = () => {};
  const endDateOnchange = () => {};

  return (
    <div className={styles['period-picker']}>
      <_DatePicker onChange={startDateOnchange} {...props}></_DatePicker>
      {props.children}
      <_DatePicker onChange={endDateOnchange} {...props}></_DatePicker>
    </div>
  );
};

export default PeriodPicker;
