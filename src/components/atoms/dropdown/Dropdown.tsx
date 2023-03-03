import "@styles/globals.css";
import { Dropdown as _Dropdown } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import React from "react";

type DropdownProps = {
  items: ItemType[];
  text: string;
};

export const Dropdown: React.FC<DropdownProps> = ({ items, text }) => {
  return (
    <_Dropdown menu={{ items }} trigger={["click"]}>
      <span>{text}</span>
    </_Dropdown>
  );
};
