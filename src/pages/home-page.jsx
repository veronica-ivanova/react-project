import { Link } from "react-router";

export const HomePage = (props) => {
  return (
    <div>
      <div>Home Page</div>
      <Link to="/restaurants">to restaurants</Link>
    </div>
  );
};
