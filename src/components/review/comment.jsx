import { useDispatch, useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/selector";
import { selectUserById } from "../../redux/entities/users/selector";
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/reviews/thunks/get-reviews";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const userId = review?.userId;
  const user = useSelector((state) => userId ? selectUserById(state, userId) : null);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [])

  return (
    <>
      {review ? (
        <div>
          {review.text}
          {userId ? (
            <p><b>By</b>: {user ? user.name : "User not found"}</p>
          ) : (
            <p>Author not found</p>
          )}
        </div>
      ) : (
        <div>Review not found</div>
      )}
    </>
  );
};
