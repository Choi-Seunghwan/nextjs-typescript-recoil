/* eslint-disable react/display-name */
import { FC } from "react";
import { Layout, LayoutProps } from "./Layout";

const WithLayout = (Component: FC, layoutProps?: LayoutProps) => {
  return (props: any) => {
    return (
      <Layout {...layoutProps}>
        <Component {...props} />
      </Layout>
    );
  };
};
export default WithLayout;
