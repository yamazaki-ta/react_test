import { useContext } from "react";
import { SampleObject } from "../../context/CountContext";

const Counter = () => {
  const { Count, setCount } = useContext(SampleObject);

  const increment = () => {
    setCount(Count + 1);
  };

  return (
    <div>
      <p>Current Count: {Count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
