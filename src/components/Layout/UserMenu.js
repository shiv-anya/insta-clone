import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faCog, faSync } from "@fortawesome/free-solid-svg-icons";
import classes from "./UserMenu.module.css";
import AuthContext from "../../store/auth-ctx";
import { useContext } from "react";
import { useHistory } from "react-router";

const UserMenu = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  return (
    <div>
      <div className={classes.link}>
        <FontAwesomeIcon icon={faUser} />
        <p>Profile</p>
      </div>
      <div className={classes.link}>
        <FontAwesomeIcon icon={faBookmark} />
        <p>Saved</p>
      </div>
      <div className={classes.link}>
        <FontAwesomeIcon icon={faCog} />
        <p>Settings</p>
      </div>
      <div className={classes.link}>
        <FontAwesomeIcon icon={faSync} />
        <p>Switch accounts</p>
      </div>

      <div
        className={`${classes.link} ${classes.logout}`}
        onClick={logoutHandler}
      >
        Log Out
      </div>
    </div>
  );
};

export default UserMenu;
