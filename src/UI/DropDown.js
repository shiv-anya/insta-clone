import classes from "./DropDown.module.css";

const DropDown = (props) => {
  return (
    <div className={`${classes.dropdown} ${props.className}`}>
      <div className={classes.dropdownContent}>{props.children}</div>
    </div>
  );
};

export default DropDown;
