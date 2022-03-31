import { useContext } from "react";

import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";
import { Message } from "./components/Message";

export const App = () => {

  return (
    <div>
      <Card />
      <Message id="msgbox1" />
      <Message id="msgbox2" />
    </div>
  );
};
