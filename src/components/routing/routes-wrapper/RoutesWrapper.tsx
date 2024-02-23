import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { authRoutes, publicRoutes } from "routes";
import RequiredAuth from "components/routing/required-auth";

const RoutesWrapper: FC = () => {
  return (
    <Routes>
      <Route element={<RequiredAuth />}>
        {authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default RoutesWrapper;
