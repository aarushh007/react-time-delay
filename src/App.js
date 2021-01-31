import React from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = React.useState(0);
  const [delay, setDelay] = React.useState(2000);
  const changeDelay = () => {
    let input = document.getElementById("delay");
    input = parseInt(input.value);
    setDelay(input * 1000);
    document.getElementById("delay").value = "";
  };
  const increase = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, delay);
  };
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={increase}>Increase with delay</button>
      <br />
      <br />
      <input id="delay" placeholder="enter delay amount" />
      <button onClick={changeDelay}>Submit</button>
      <br />
      <br />
      <h3>current delay: {delay / 1000} seconds</h3>
    </div>
  );
}
