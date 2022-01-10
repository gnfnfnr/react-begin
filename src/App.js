import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello(params) {
  // useEffect(()=>{
  //   console.log("i am here");
  //   return () =>(console.log("bye"));
  // }, []);
  function byFn(params) {
    console.log("bye")
  }
  function helloFn(params) {
    console.log("i am here");
    return byFn;
  }
  useEffect(helloFn, [])
  return(
    <h1>Hello!</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {setShowing(prev => !prev)}
  console.log("choice");
  return(
    <div>
      {showing? <Hello />: null}
      <button onClick={onClick}>{showing? "Hide": "Show"}</button>
    </div> 
  );
}

export default App;
