import classes from "./User.module.css";

const User = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <img src={props.src} alt="user" />
        </div>
      </div>
      <div>
        <p className={classes.name}>{props.username}</p>
      </div>
    </div>
  );
};

export default User;
