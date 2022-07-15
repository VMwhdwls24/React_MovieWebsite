import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+1);
  console.log("I run all time");
  const YOLO = () => {
    console.log("I run ONLY once");
  }
  useEffect(YOLO, []);
  return (
    <div className="App">  
      <h1>{counter}</h1> 
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;