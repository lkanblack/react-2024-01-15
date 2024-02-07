import { Tab } from '../tab/component';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/selector';

export const Tabs = ({onSelect}) => {

  const restarauntIds = useSelector(selectRestaurantIds);
  
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
      {restarauntIds.map((id) => (
          <Tab id={id} onChange={() => onSelect(id)}/>
        ))}
      </div>
    </div>
  )
}

