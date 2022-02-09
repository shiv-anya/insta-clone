import UserBar from "./UserBar";
import Suggestions from "./Suggestions";
import classes from "./Aside.module.css";
import User1 from "../../assets/User1.jpg";

const Aside = (props) => {
  return (
    <div className={classes.aside}>
      <UserBar func="Switch" user={User1} username="_.sg._" nickname="shivi" />
      <Suggestions />
    </div>
  );
};

export default Aside;
