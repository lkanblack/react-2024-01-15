import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectDishById } from "../../redux/entities/dishes/selector";
import { getDishesByRestaurantId } from "../../redux/entities/dishes/thunks/get-dishes";
import { decrement, increment, selectProductAmountById } from "../../redux/ui/cart";

export const Dish = ({ dishId, restarauntId }) => {

  const dish = useSelector((state) => selectDishById(state, dishId));

  const amount = useSelector((state) => selectProductAmountById(state, dishId));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restarauntId));
  }, [restarauntId])

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
