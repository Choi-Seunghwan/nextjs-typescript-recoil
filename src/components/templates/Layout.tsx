import React, { ReactNode } from 'react';
import { Menu as _Menu, Layout as _Layout, MenuProps } from 'antd';
import Link from 'next/link';
import styles from '@styles/layout.module.scss';

const { Header, Sider, Content } = _Layout;
const sideMenuItems: MenuProps['items'] = [
  {
    key: '1',
    label: <Link href={'/seller'}>판매자 정보 관리</Link>,
  },
  {
    key: '2',
    label: <Link href={'/market'}>디자이너마켓 관리</Link>,
  },
  {
    key: '3',
    label: '정산 정보 관리',
    disabled: true,
  },
  {
    key: '4',
    label: '콘텐츠 관리',
    disabled: true,
  },
  {
    key: '5',
    label: '관리자 설정',
    disabled: true,
  },
];

export type LayoutProps = {
  children?: ReactNode;
  noSide?: boolean;
  menuDisabled?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, noSide, menuDisabled = false }) => {
  return (
    <_Layout>
      <Header className={styles['layout-header']}>
        <Link href={'/'}>
          <h2>마켓플레이스 관리자</h2>
        </Link>
      </Header>
      <_Layout style={{ height: '100vh' }}>
        {!noSide && (
          <Sider className={styles['layout-slider']} width={200}>
            <_Menu
              mode="inline"
              className={styles['layout-slider-menu']}
              items={sideMenuItems}
              disabled={menuDisabled}
            />
          </Sider>
        )}
        <Content>{children}</Content>
      </_Layout>
    </_Layout>
  );
};
