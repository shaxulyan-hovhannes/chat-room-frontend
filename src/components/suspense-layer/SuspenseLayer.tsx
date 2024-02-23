import { FC, Suspense, PropsWithChildren } from "react";

const SuspenseLayer: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>;
};

export default SuspenseLayer;
