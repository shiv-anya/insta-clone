import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import classes from "./MessageBox.module.css";

const MessageBox = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.paper}>
        <FontAwesomeIcon className={classes.i} icon={faPaperPlane} />
      </div>
      <div className={classes.inner}>
        <h2>Your Messages</h2>
        <p>Send private photos and messages to a friend or group.</p>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default MessageBox;
