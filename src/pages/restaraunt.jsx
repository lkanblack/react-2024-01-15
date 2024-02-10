import { useEffect, useState } from "react";
import { Restaurant } from "../components/restaraunt/component"
import { Tabs } from "../components/tabs/component"
import { useDispatch } from "react-redux";
import { getRestaurants } from "../redux/entities/restaurants/thunks/get-restaurants";

export const RestaurantPage = () => {

  const [currentRestaurantId, setCurrentRestaurantId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);
  return (

    <section className='restaraunt-list'>
      <Tabs onSelect={setCurrentRestaurantId}/>
      {currentRestaurantId && <Restaurant restarauntId={currentRestaurantId} />}
    </section>
  )
}