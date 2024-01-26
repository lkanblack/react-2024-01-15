import './style.scss';
import { Menu } from '../menu/components';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div className='restaraunt'>
      <p>Restaraunt name: <b>{name}</b></p>
      <h3>Menu</h3>
      <Menu menu={menu} />
      <h3>Reviews</h3>
      <Reviews reviews={reviews} />
    </div>
  );
}
