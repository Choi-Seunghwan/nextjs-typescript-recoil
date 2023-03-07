import { DatePicker as _DatePicker } from "antd";
import { DefaultOptionType } from "antd/es/select";
import React from "react";
import { BaseProps } from "src/types/common";
import styles from "./period-picker.module.scss";

type PeriodPicker = {
  defaultValue?: any;
  disabled?: boolean;
} & BaseProps;

const PeriodPicker: React.FC<PeriodPicker> = ({
  defaultValue,
  disabled,
  style,
  children,
}) => {
  const startDateOnchange = () => {};
  const endDateOnchange = () => {};

  return (
    <div className={styles["period-picker"]}>
      <_DatePicker
        onChange={startDateOnchange}
        defaultValue={defaultValue}
        disabled={disabled}
        style={style}
      ></_DatePicker>
      {children}
      <_DatePicker
        onChange={endDateOnchange}
        defaultValue={defaultValue}
        disabled={disabled}
        style={style}
      ></_DatePicker>
    </div>
  );
};

export default PeriodPicker;
