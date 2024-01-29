import {Restaurant} from '../restaraunt/component';
import { useState } from 'react';

export const Tabs = ({restaurants}) => {

  const [selectedRestaurant, setSelectedRestaurant] = useState();

  const tabHandler = (restarauntName) => {
    setSelectedRestaurant(restarauntName);
  }

  return (
    <div>
        {restaurants.map((restaraunt) => (
          <label>
            <input 
              type="radio"
              name="tab-input"
              onChange={() => tabHandler(restaraunt.name)}
            />
            <div>{restaraunt.name}</div>
          </label>
        ))}
          <div className="tab">
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