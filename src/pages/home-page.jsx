import { Link } from "react-router";
import { Modal } from "../components/Modal/modal"

export const HomePage = (props) => {
  return (
    <div>
      <div>Home Page</div>
      <Link to="/restaurants">to restaurants</Link>
      <Modal> <div>modal</div></Modal>
    </div>
  );
};
