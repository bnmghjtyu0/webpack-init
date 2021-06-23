import * as React from "react";

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
    </div>
  );
};

export default App;
