import * as React from "react";
import { withRouter } from "react-router-dom";

const MorseScreen: React.FC = () => {
  return (
    <React.Fragment>
      <h2>モールス信号</h2>
    </React.Fragment>
  );
};

export default withRouter(MorseScreen);
