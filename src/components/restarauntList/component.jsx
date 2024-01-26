import {Restaurant} from '../restaraunt/component';
import {restaurants} from '../../mock/mock';

import './style.scss';

export const RestarauntList = () => {
  return(
    <section className='restaraunt-list'>
      {restaurants.map((restaraunt) => (
        <Restaurant key={restaraunt.id} name={restaraunt.name} menu={restaraunt.menu} reviews={restaraunt.reviews}/>
      ))}
    </section>
  )
}