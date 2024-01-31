import { Tabs } from '../tabs/component';
import {restaurants} from '../../mock/mock';

import './style.scss';

export const RestarauntList = () => {
  return(
    <section className='restaraunt-list'>
      <Tabs restaurants={restaurants}/>
    </section>
  )
}