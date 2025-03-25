import React from "react";
import { countAtom, doubleCountAtom } from "../state/atom";
import { useAtom } from "jotai";

const Counter: React.FC = () => {
    const [count, setCount] = useAtom(countAtom);
    const [doubleCount] = useAtom(doubleCountAtom);

    const increment = () => {
        setCount((prev) => prev + 1)
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
    }
  return (
    <div className="">
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <p> Double Count Derived :{doubleCount}</p>
        <button 
         className="w-50 h-10 bg-red-500 mr-5 cursor"
         onClick={increment}
         >Increment</button>

        <button 
        className="w-50 h-10 bg-red-500 cursor"
        onClick={decrement}
        >Decrement</button>
    </div>
  )
}

export default Counter