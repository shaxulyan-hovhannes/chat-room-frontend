import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Paths } from "routes";

const RequiredAuth: FC = () => {
  const location = useLocation();
  const isAuth = true;

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={Paths.HOME} replace state={{ from: location }} />;
};

export default RequiredAuth;
