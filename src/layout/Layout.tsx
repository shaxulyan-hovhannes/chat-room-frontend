import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.layoutHeaderBlock}>Header</div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
