import User1 from "../../assets/User1.jpg";
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
          <UserBar func="Follow" />
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
