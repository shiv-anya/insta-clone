import classes from "./CommentSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CommentSection = (props) => {
  return (
    <div className={classes.commentSec}>
      <div className={classes.comment}>
        <p className={classes.username}>{props.username}</p>
        <p className={classes.comment}>{props.text}</p>
      </div>
      <div>
        <FontAwesomeIcon className={classes.i} icon={faHeart} />
      </div>
    </div>
  );
};

export default CommentSection;
