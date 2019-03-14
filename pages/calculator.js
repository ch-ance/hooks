import { useState } from "react";

const Calculator = () => {
    const [display, setDisplay] = useState("0");

  return (
    <>
      <h2>Calculator</h2>

      <div id="container">
        <div id="display">{display}</div>
      </div>

      <style jsx>{`
        #container {
          max-width: 600px;
          height: 750px;
          margin: 0 auto;
          border: 1px solid black;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(8, 1fr);
        }
      `}</style>
    </>
  );
};

export default Calculator;
