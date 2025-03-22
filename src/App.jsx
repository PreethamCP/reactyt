import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <form>
        <input
          className=" bg-white text-black px-4 py-4 m-4 w-50 h-10 flex flex-row"
          type="text"
          placeholder="Enter your name"
        />
        <button className="px-4 py-4 m-2 bg-green-500">Submit</button>
      </form>
    </div>
  );
};

export default App;
