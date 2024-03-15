// import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [val, setVal] = useState(0);

  let lastChar = val[val.length - 1];
  let isEqual = false;

  if (val.toString().includes("=")) isEqual = true;
  else isEqual = false;

  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "="
  ) {
    lastChar = true;
  } else {
    lastChar = false;
  }

  let ButtonClk = (e) => {
    val === 0
      ? setVal(e.target.innerText)
      : isEqual
      ? val
          .toString()
          .replace(val.slice(val.indexOf("=")), "" + e.target.innerText)
      : setVal(val + "" + e.target.innerText);
  };
  let Operation = (e) => {
    !lastChar
      ? setVal(val + "" + e.target.innerText)
      : isEqual
      ? setVal(
          val
            .toString()
            .replace(val.slice(val.indexOf("=")), "" + e.target.innerText)
        )
      : setVal(val + e.target.innerText);
  };
  let Result = (e) => {
    let res;
    res = val.eval();
    isEqual ? setVal(val + "" + res) : setVal(0);
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",
      }}
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
    >
      <h1>Login Successful</h1>
      <>
        <h1>Calculator Project</h1>
        <div>
          <input
            autoFocus
            className="display"
            value={val}
            type="text"
            readOnly
          />
        </div>
        <div>
          <button onClick={ButtonClk}>7</button>
          <button onClick={ButtonClk}>8</button>
          <button onClick={ButtonClk}>9</button>
          <button onClick={Operation}>*</button>
        </div>
        <div>
          <button onClick={ButtonClk}>4</button>
          <button onClick={ButtonClk}>5</button>
          <button onClick={ButtonClk}>6</button>
          <button onClick={Operation}>/</button>
        </div>
        <div>
          <button onClick={ButtonClk}>1</button>
          <button onClick={ButtonClk}>2</button>
          <button onClick={ButtonClk}>3</button>
          <button onClick={Operation}>-</button>
        </div>
        <div>
          <button onClick={ButtonClk}>0</button>
          <button onClick={ButtonClk}>.</button>
          <button onClick={Result}>=</button>
          <button onClick={Operation}>+</button>
        </div>
      </>

      <Link to="/login" className="btn btn-light my-5">
        Logout
      </Link>
    </div>
  );
};

export default Home;
