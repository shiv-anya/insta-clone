import User from "../../assets/user.png";
import classes from "./Suggestions.module.css";
import UserBar from "./UserBar";

const Suggestions = () => {
  return (
    <div>
      <div className={classes.head}>
        <p className={classes.grey}>Suggestions For You</p>
        <a className={classes.func}>See All</a>
      </div>
      <div>
        <div>
          <UserBar
            func="Follow"
            user={User}
            username="nikhil_078"
            nickname="nickz"
          />
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
