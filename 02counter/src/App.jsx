import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 10  ;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("Clicked", counter);
    // counter = counter + 1;
    // setCounter(counter + 1)

    // const count = counter + 1
    // setCounter(count)

    // counter = counter + 1
    // setCounter(counter)

    //This is add only one
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // This is add all three value
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    console.log("Clickes", counter);

    // setCounter(counter-1)

    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Decre val</button>
    </>
  );
}

export default App;
