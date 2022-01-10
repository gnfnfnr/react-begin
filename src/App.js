import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev+ 1 );
  }
  const onlyOnce = () => {
    console.log("onlly once");
  }
  const [key, setKey] = useState("");
  console.log("everytime")
  useEffect(onlyOnce, []);

  const onChange = (event) => {
    setKey(event.target.value);
  }
  useEffect(()=> {
    if (key !=="" && key.length >= 6) {
      console.log("search", key);
    }
  }, [key]);
  return (
    <div>
      <h1 className={styles.title}>welcome back!</h1>
      <input onChange={onChange} value={key} type="text" placeholder="Search here"/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>countit</button>
      <Button text="hello"/>
    </div>
  );
}

export default App;
