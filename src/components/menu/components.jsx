import { Dish } from "../dish/component"

export const Menu = ({restarauntMenuIds}) => {

  return (
  <ul>
   {restarauntMenuIds.map((dishId) => (
      <li><Dish dishId={dishId}/></li>
      ))}
  </ul>
  );
}