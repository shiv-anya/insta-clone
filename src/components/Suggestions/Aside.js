import UserBar from "./UserBar";
import Suggestions from "./Suggestions";
import classes from "./Aside.module.css";

const Aside = (props) => {
  return (
    <div className={classes.aside}>
      <UserBar func="Switch" />
      <Suggestions />
    </div>
  );
};

export default Aside;
