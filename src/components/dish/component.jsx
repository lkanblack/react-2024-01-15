import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectDishById } from "../../redux/entities/dishes/selector";
import { getDishes } from "../../redux/entities/dishes/thunks/get-dishes";

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, [])

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
