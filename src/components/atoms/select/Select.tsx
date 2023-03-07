import { Select as _Select } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { DefaultOptionType } from "antd/es/select";
import React from "react";

type SelectProps = {
  options: DefaultOptionType[];
  defaultValue?: any;
  disabled?: boolean;
};

const Select: React.FC<SelectProps> = ({ options, defaultValue, disabled }) => {
  return (
    <_Select
      options={options}
      defaultValue={defaultValue}
      disabled={disabled}
    ></_Select>
  );
};

export default Select;
