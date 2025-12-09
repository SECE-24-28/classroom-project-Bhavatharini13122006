import { useState } from "react";

const Usestate = () => {
  const [name, setName] = useState(""); 

  console.log("The data is:", name);

  return (
    <>
      <h1>This is Usestate component</h1>
      <input
        type="text"
        value={name} // bind input to state
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")}>Clear</button>
      <h2>The name is: {name}</h2>
    </>
  );
};

export default Usestate;
