import {Restaurant} from '../restaraunt/component';
import {restaurants} from '../../mock/mock';

export const RestarauntList = () => {
  return(
    <section>
      {restaurants.map((place) => (
        <Restaurant key={place.id} name={place.name} menu={place.menu} reviews={place.reviews}/>
      ))}
    </section>
  )
}