import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectDishById } from "../../redux/entities/dishes/selector";
import { getDishes } from "../../redux/entities/dishes/thunks/get-dishes";
import { decrement, increment, selectProductAmountById } from "../../redux/ui/cart";

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  // const [count, setCount] = useState(0);

  const amount = useSelector((state) => selectProductAmountById(state, dishId));

  const dispatch = useDispatch();

  const counterInc = () => {
    if (amount < 5) {
      // setCount(count + 1);
    }
  };

  const countDec = () => {
    if (amount > 0) {
      // setCount(count - 1);
    }
  };


  useEffect(() => {
    dispatch(getDishes());
  }, [])

  return (
    <div>
      {dish ? (
        <>
          {dish.name}
          <span className="counter">
          <button disabled={amount === 0} onClick={() => dispatch(decrement(dishId))}>
            -
          </button>
          {amount}
          <button disabled={amount === 5} onClick={() => dispatch(increment(dishId))}>
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
