import * as React from "react";
import GirlArt from "../public/assets/images/girl-art.jpg";
const App = () => {
  const recipe = {
    leatherStripe: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
  };
  const recipe2 = {
    ...recipe,
    id: 1,
  };

  return (
    <div>
      <h1>Hello React</h1>
      <button className="btn">按鈕</button>
      <div className="art"></div>
      <img src={GirlArt} alt="girl" width={200} />
    </div>
  );
};

export default App;
