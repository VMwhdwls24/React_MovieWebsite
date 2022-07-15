import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onChange = (e) => setKeyword(e.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>  
      <input type="text" 
        value={keyword}
        onChange={onChange}
        placeholder="Search for..."
      />
      <h1>{counter}</h1> 
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;