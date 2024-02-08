import { Review } from "../review/comment";

export const Reviews = ({restarauntReviewIds}) => {
  return (
    <ul>
      {restarauntReviewIds.map((reviewId) => (
        <li>
        <Review id={reviewId}/>
        </li>
      ))}
    </ul>
  )
};