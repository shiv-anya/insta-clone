import user from "../../assets/user.png";
import classes from "./UserBar.module.css";

const UserBar = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.info}>
        <img src={props.user} alt="user" />
        <div className={classes.names}>
          <p className={classes.username}>{props.username}</p>
          <p className={classes.nickname}>{props.nickname}</p>
        </div>
      </div>
      <div>
        <a href="#">{props.func}</a>
      </div>
    </div>
  );
};

export default UserBar;
