import { Reviews } from "../Reviews/reviews";
import { Menu } from "../Menu/menu";

import styles from "./restaurant.module.css";

export const Restaurant = ({ name, menuIds, reviewsIds }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.headingName}>{name}</h2>
      </div>

      <div className={styles.contentWrapper}>
        <Menu className={styles.menu} menuIds={menuIds} />

        {reviewsIds.length ? (
          <Reviews reviewsIds={reviewsIds} />
        ) : (
          "There are no reviews yet"
        )}
      </div>
    </div>
  );
};
