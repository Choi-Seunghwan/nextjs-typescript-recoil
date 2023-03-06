import React, { ReactNode } from "react";
import { Menu as _Menu, Layout as _Layout, MenuProps } from "antd";

const { Sider, Content } = _Layout;
const sideMenuItems: MenuProps["items"] = ["1", "2", "3", "4"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export type LayoutProps = {
  children?: ReactNode;
  noSide?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, noSide }) => {
  return (
    <_Layout>
      {!noSide && (
        <Sider width={200}>
          <_Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={sideMenuItems}
          />
        </Sider>
      )}
      <Content>{children}</Content>
    </_Layout>
  );
};
