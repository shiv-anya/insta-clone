import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./PostHead.module.css";

const PostHead = (props) => {
  return (
    <div className={classes.head}>
      <div className={classes.imgTab}>
        <img src={props.src} />
        <p>{props.username}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
  );
};
export default PostHead;
