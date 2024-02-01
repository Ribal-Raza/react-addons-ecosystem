import { Counter } from "./index";
import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";
const CouterLayout = () => {
  const counterState = useContext(CounterContext);
  console.log(counterState);
  return (
    <div className="flex flex-col items-center justify-center w-full px-10 py-5">
      <div className=" w-1/3 flex items-center justify-center mb-4">
        <h1 className="text-2xl font-bold">Counter {counterState.count}</h1>
      </div>
      <div className="flex flex-col gap-2">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
};

export default CouterLayout;
