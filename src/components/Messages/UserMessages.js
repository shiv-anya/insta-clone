import User1 from "../../assets/User1.jpg";
import classes from "./UserMessages.module.css";

const UserMessages = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.img}>
        <img src={User1} alt="user" />
      </div>
      <div className={classes.right}>
        <p className={classes.user}>username</p>
        <div className={classes.message}>
          <p>Last Message</p>
          <p className={classes.time}>&bull; Now</p>
        </div>
      </div>
    </div>
  );
};

export default UserMessages;
