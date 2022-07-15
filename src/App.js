import Button from "./Button"
import styles from "./App.module.css"
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+1);

  return (
    <div className="App">  
      <h1>{counter}</h1>
      <Button onClick={onClick} text={"Continue"} />
    </div>
  );
}

export default App;