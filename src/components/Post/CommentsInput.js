import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import classes from "./CommentInput.module.css";

const CommentsInput = () => {
  return (
    <div>
      <div className={classes.commentTimer}>
        <p>1 DAY AGO</p>
      </div>
      <div className={classes.commentInp}>
        <form>
          <div>
            <FontAwesomeIcon className={classes.i} icon={faSmile} />
            <input type="text" placeholder="Add a comment..." />
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default CommentsInput;
