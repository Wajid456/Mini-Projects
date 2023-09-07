import React from "react";
import Bulb from "./Components/Bulb";
import Copy from "./Components/Copy";
import Like from "./Components/Like";
import Password from "./Components/Password";
import Comment from "./Components/Comment";

const App = () => {
  return (
    <div>
      <Like />
      <Password />
      <Copy />
      <Bulb />
      <Comment />
    </div>
  );
};

export default App;
