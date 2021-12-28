import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./UserBar.module.css";

const UserBar = () => {
  return (
    <div className={classes.userbar}>
      <div className={classes.username}>
        <p>username</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div>
        <FontAwesomeIcon className={classes.i} icon={faEdit} />
      </div>
    </div>
  );
};

export default UserBar;
