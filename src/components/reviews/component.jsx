import { useDispatch } from "react-redux";
import { Review } from "../review/comment";
import { useEffect } from "react";
import { getUsers } from "../../redux/entities/users/thunks/get-users";

export const Reviews = ({restarauntReviewIds}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [])

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