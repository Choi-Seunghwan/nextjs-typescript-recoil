import { Dropdown as _Dropdown } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import React from 'react';
import { BaseProps } from 'src/types/common';

type DropdownProps = {
  items?: ItemType[];
  text?: string;
  disabled?: boolean;
} & BaseProps;

const Dropdown: React.FC<DropdownProps> = ({ items, text, disabled }) => {
  return (
    <_Dropdown menu={{ items }} trigger={['click']} disabled={disabled}>
      <span>{text}</span>
    </_Dropdown>
  );
};

export default Dropdown;
