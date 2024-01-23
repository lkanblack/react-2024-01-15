export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <p>Restaraunt name: <b>{name}</b></p>
      <h3>Menu</h3>
      <ul>
      {menu.map((item) => (
        <li key={item.id}><em>{item.name}</em></li>
      ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
      {reviews.map((review) => (
        <li key={review.id}><u>{review.text}</u></li>
      ))}
      </ul>
    </div>
  );
}
