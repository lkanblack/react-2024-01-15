import { useSelector } from 'react-redux';
import styles from './style.module.scss';
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';

export const Tab = ({id, onChange}) => {

  const restaurant = useSelector(state => selectRestaurantById(state,id))
  
    return (
        <label className={styles.tab}>
        <input 
          type="radio"
          name="tab-input"
          onChange={onChange}
        />
        <div>{restaurant.name}</div>
      </label>
    )
}