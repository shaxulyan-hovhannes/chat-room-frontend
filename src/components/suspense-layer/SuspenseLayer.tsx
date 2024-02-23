import { FC, Suspense, PropsWithChildren } from "react";

// import PageTitle from "../../components/common/page-title";
// import AppInfo from "../../components/app-info";

const SuspenseLayer: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>;
};

export default SuspenseLayer;
