import {Restaurant} from '../restaraunt/component';
import {restaurants} from '../../mock/mock';

import './style.scss';

export const RestarauntList = () => {
  return(
    <section className='restaraunt-list'>
      {restaurants.map((place) => (
        <Restaurant key={place.id} name={place.name} menu={place.menu} reviews={place.reviews}/>
      ))}
    </section>
  )
}