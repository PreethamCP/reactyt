import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("Preetham learning React");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted:", username);
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-white text-black px-4 py-2 m-4 w-50 h-10 rounded border"
          type="text"
          placeholder="Enter your name"
        />
        <button className="m-5 rounded px-3 py-2 text-white bg-lime-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
