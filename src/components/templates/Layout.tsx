import React, { ReactNode } from "react";
import { Menu as _Menu, Layout as _Layout, MenuProps } from "antd";
import Link from "next/link";

const { Header, Sider, Content } = _Layout;
const sideMenuItems: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href={"/seller"}>판매자 정보 관리</Link>,
  },
  {
    key: "2",
    label: <Link href={"/market"}>디자이너마켓 관리</Link>,
  },
  {
    key: "3",
    label: "정산 정보 관리",
    disabled: true,
  },
  {
    key: "4",
    label: "콘텐츠 관리",
    disabled: true,
  },
  {
    key: "5",
    label: "관리자 설정",
    disabled: true,
  },
];

export type LayoutProps = {
  children?: ReactNode;
  noSide?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, noSide }) => {
  return (
    <_Layout>
      <Header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "solid 1px #ccc",
          paddingLeft: "20px",
        }}
      >
        <Link href={"/"}>
          <h2>마켓플레이스 관리자</h2>
        </Link>
      </Header>
      <_Layout style={{ height: "100vh" }}>
        {!noSide && (
          <Sider width={200}>
            <_Menu
              mode="inline"
              style={{ height: "100%", borderRight: 0 }}
              items={sideMenuItems}
            />
          </Sider>
        )}
        <Content>{children}</Content>
      </_Layout>
    </_Layout>
  );
};
