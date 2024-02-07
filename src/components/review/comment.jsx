import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/selector";

export const Review = ({id}) => {

  const review = useSelector((state) =>selectReviewById(state, id))
  return(
    <>
      {review ? (
        <div>{review.text}</div>
      ) : ( <div>Review not found</div> )}
    </>
  )
}