import { useState } from "react";

const Button = ({ value }) => {
  return (
    <div>
      <style jsx>{`
        div {
          border: 1px solid grey;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          font-size: 4.5rem;
        }
      `}</style>
      {value}
    </div>
  );
};

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [workingNum, setWorkingNum] = useState(0);

  const handleClick = value => {
    if (display === "0") {
      setDisplay(value.toString());
      setWorkingNum(value);
    } else if (
      typeof value === "number" ||
      value === "+" ||
      value === "-" ||
      value === "/" ||
      value === "*" ||
      value === "."
    ) {
      setWorkingNum(workingNum + value);
      setDisplay(display + value.toString());
    } else if (value === "%") {
      // DOESN'T WORK PROPERLY
      setDisplay(display + value);
      setWorkingNum(workingNum / 100);
    } else if (value === "C") {
      setDisplay("0");
      setWorkingNum(0);
    } else if (value === "()") {
      if (
        display.split("").filter(x => x === "(" || x === ")").length % 2 ===
        1
      ) {
        setDisplay(display + ")");
        setWorkingNum(workingNum + ")");
      } else {
        setDisplay(display + "(");
        setWorkingNum(workingNum + "(");
      }
    } else if (value === "+/-") {
        if(display[0] !== "-") {
            setDisplay("-" + display);
            setWorkingNum(-workingNum);
        }
    } else if (value === "=") {
      setDisplay(calculate());
    }
  };

  const calculate = () => {
    return eval(workingNum);
  };

  const symbolsAndNumbers = [
    "C",
    "()",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "+/-",
    "0",
    ".",
    "="
  ];
  return (
    <>
      <h2>Calculator</h2>

      <div id="container">
        <div id="display">{display}</div>
        {symbolsAndNumbers.map(value => {
          return (
            <div onClick={() => handleClick(value)}>
              <Button value={value} />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        #container {
          box-sizing: border-box;
          max-width: 600px;
          height: 750px;
          margin: 0 auto;
          border: 1px solid black;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(7, 1fr);
        }
        #display {
          width: 100%;
          grid-column: 1 / 5;
          grid-row: 1 / 3;
          background-color: red;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: 5rem;
        }
        #top-col,
        #sec-col,
        #thi-col,
        #fou-col,
        #fiv-col,
        #bot-col {
          grid-column: 1 / 5;
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          align-items: center;
          font-size: 4.5rem;
        }
      `}</style>
    </>
  );
};

export default Calculator;
