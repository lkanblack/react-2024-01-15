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

  const disableInc = count === 5;
  const disableDec = count === 0;

  return (
  <div>
    {dish.name}
    <span className="counter">
      <button disabled={disableDec} onClick={countDec}>-</button>
      {count}
      <button disabled={disableInc} onClick={counterInc}>+</button>
    </span>
  </div>
  );
}