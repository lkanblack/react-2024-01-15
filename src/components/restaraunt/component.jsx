import './style.scss';
import { Menu } from '../menu/components';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../review-form/component';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';

export const Restaurant = ({ restarauntId }) => {

  const restaraunt = useSelector(state => selectRestaurantById(state,restarauntId))

  return (
    <div className='restaraunt'>
      <p>Restaraunt name: <b>{restaraunt.name}</b></p>
      <h3>Menu</h3>
      <Menu restarauntMenuIds={restaraunt.menu} restarauntId={restarauntId}/>
      <h3>Reviews</h3>
      <Reviews restarauntReviewIds={restaraunt.reviews} />
      <ReviewForm />
    </div>
  );
}
