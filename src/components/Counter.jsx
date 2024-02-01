import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const counterAction = useContext(CounterContext);
  return (
    <div className="flex gap-2">
      <button
        onClick={() => counterAction.setCount((prevState) => prevState + 1)}
        className="px-4 py-2 bg-black text-white text-lg hover:bg-black/15"
      >
        Increment
      </button>
      <button
        onClick={() => counterAction.setCount((prevState) => prevState - 1)}
        className="px-4 py-2 bg-black text-white text-lg hover:bg-black/15"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
