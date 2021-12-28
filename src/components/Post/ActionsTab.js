import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import classes from "./ActionTab.module.css";

const ActionTab = (props) => {
  return (
    <div className={classes.whole}>
      <div className={classes.outerAction}>
        <div className={classes.innerAction1}>
          <FontAwesomeIcon className={classes.i} icon={faHeart} size="2x" />
          <FontAwesomeIcon
            className={classes.i}
            icon={faPaperPlane}
            size="2x"
          />
          <FontAwesomeIcon className={classes.i} icon={faComment} size="2x" />
        </div>
        <div className={classes.innerAction2}>
          <FontAwesomeIcon className={classes.i} icon={faBookmark} size="2x" />
        </div>
      </div>
      <div className={classes.likes}>
        <p>{props.likes} likes</p>
      </div>
      <div className={classes.captionBar}>
        <p className={classes.user}>{props.username}</p>
        <p className={classes.caption}>{props.caption}</p>
      </div>
      <div>
        <p className={classes.viewComments}>View all 27 comments</p>
      </div>
    </div>
  );
};

export default ActionTab;
