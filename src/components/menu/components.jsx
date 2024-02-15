import { Dish } from "../dish/component"

export const Menu = ({restarauntMenuIds,restarauntId}) => {
  return (
  <ul>
   {restarauntMenuIds.map((dishId) => (
      <li><Dish dishId={dishId} restarauntId={restarauntId}/></li>
      ))}
  </ul>
  );
}