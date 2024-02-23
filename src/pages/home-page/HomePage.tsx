import { FC } from "react";

import SuspenseLayer from "components/suspense-layer";

const HomePage: FC = () => {
  return (
    <SuspenseLayer>
      <div>HomePage</div>
    </SuspenseLayer>
  );
};

export default HomePage;
