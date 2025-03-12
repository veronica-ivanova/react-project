import { Review } from "../Review/review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};
