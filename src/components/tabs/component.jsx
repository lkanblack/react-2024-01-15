import {Restaurant} from '../restaraunt/component';
import { useState } from 'react';
import { Tab } from '../tab/component';

import styles from './style.module.scss';

export const Tabs = ({restaurants}) => {

  const [selectedRestaurant, setSelectedRestaurant] = useState();

  const tabHandler = (restarauntName) => {
    setSelectedRestaurant(restarauntName);
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
      {restaurants.map((restaraunt) => (
          <Tab restaraunt={restaraunt} handler={tabHandler}/>
        ))}
      </div>

      <div>
        {selectedRestaurant && (
          <Restaurant
            name={selectedRestaurant}
            menu={restaurants.find(restaraunt => restaraunt.name === selectedRestaurant).menu}
            reviews={restaurants.find(restaraunt => restaraunt.name === selectedRestaurant).reviews}
          />
        )}
      </div>
    </div>
  )
}