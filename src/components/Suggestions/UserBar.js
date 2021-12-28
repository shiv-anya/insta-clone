import user from "../../assets/user.png";
import classes from "./UserBar.module.css";

const UserBar = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.info}>
        <img src={user} alt="user" />
        <div className={classes.names}>
          <p className={classes.username}>username</p>
          <p className={classes.nickname}>nickname</p>
        </div>
      </div>
      <div>
        <a href="#">{props.func}</a>
      </div>
    </div>
  );
};

export default UserBar;
