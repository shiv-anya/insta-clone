import classes from "./Notifications.module.css";
import User1 from "../../assets/User1.jpg";
import User2 from "../../assets/User2.jpg";

const Notifications = () => {
  return (
    <div className={classes.box}>
      <div className={classes.user}>
        <img src={User2} alt="user" />
        <p className={classes.username}>username</p>
        <p className={classes.activity}>liked your photo.</p>
        <p className={classes.time}>8m</p>
      </div>
      <div>
        <img src={User1} alt="uploaded" />
      </div>
    </div>
  );
};

export default Notifications;
