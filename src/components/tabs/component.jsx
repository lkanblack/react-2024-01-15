import {Restaurant} from '../restaraunt/component';
import { useState } from 'react';

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
          <label className={styles.tab}>
            <input 
              type="radio"
              name="tab-input"
              onChange={() => tabHandler(restaraunt.name)}
            />
            <div>{restaraunt.name}</div>
          </label>
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