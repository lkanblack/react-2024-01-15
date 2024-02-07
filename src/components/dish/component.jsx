import { useState } from "react";
import { useSelector } from "react-redux";

import { selectDishById } from "../../redux/entities/dishes/selector";

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const [count, setCount] = useState(0);

  const counterInc = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const countDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {dish ? (
        <>
          {dish.name}
          <span className="counter">
            <button disabled={count === 0} onClick={countDec}>
              -
            </button>
            {count}
            <button disabled={count === 5} onClick={counterInc}>
              +
            </button>
          </span>
        </>
      ) : (
        <div>Dish not found</div>
      )}
    </div>
  );
};
