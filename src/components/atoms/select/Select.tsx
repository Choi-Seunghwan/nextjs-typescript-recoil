import { Select as _Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import { BaseProps } from 'src/types/common';

type SelectProps = {
  options?: DefaultOptionType[];
  defaultValue?: any;
  disabled?: boolean;
} & BaseProps;

const Select: React.FC<SelectProps> = props => {
  return <_Select {...props}></_Select>;
};

export default Select;
