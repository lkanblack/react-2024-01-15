import { Restaurant } from '../restaraunt/component';
import { Tabs } from '../tabs/component';

import './style.scss';
import { useState } from 'react';

export const RestarauntList = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState();
  return(
    <section className='restaraunt-list'>
      <Tabs onSelect={setCurrentRestaurantId}/>
      {currentRestaurantId && <Restaurant restarauntId={currentRestaurantId} />}
    </section>
  )
}