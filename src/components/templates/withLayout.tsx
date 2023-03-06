import { FC } from "react";
import { Layout, LayoutProps } from "./Layout";

const WithLayout = (Component: FC, props?: any, layoutProps?: LayoutProps) => (
  <Layout {...layoutProps}>
    <Component {...props} />
  </Layout>
);

export default WithLayout;
