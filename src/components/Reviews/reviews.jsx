import { Review } from "../Review/review";
import { ReviewForm } from "../review-form/review-form";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      <ReviewForm/>
    </div>
  );
};
