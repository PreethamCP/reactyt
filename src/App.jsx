import React, { useState } from "react";

const App = () => {
  var user = "Preetham";

  const [num, setNum] = useState(10);

  return (
    <div>
      <h1>number is {num}</h1>
      <button
        onClick={() => {
          setNum(num + 10);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setNum(num - 10);
        }}
      >
        Decremnt
      </button>
    </div>
  );
};

export default App;
