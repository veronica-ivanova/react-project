import { selectReviewById } from "../../redux/entities/reviews/slice";
import { Review } from "./review";
import { useSelector } from "react-redux";
import styles from "./review.module.css";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const { text } = review;
  return <Review text={text} />;
};
