import { useState } from "react";

export const Dish = ({dish}) => {

  const [count, setCount] = useState(0);

  const counterInc = () => {
    if(count < 5){
      setCount(count + 1);
    }
  }

  const countDec = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
  <div>
    {dish.name}
    <span className="counter">
      <button disabled={count === 0} onClick={countDec}>-</button>
      {count}
      <button disabled={count === 5} onClick={counterInc}>+</button>
    </span>
  </div>
  );
}