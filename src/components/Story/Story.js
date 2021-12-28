import Card from "../../UI/Card";
import User from "../User/User";
import UserOne from "../../assets/User1.jpg";
import UserTwo from "../../assets/User2.jpg";
import classes from "./Story.module.css";

const Story = () => {
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <User src={UserOne} username="Niro" />
        <User src={UserTwo} username="Clara" />
      </Card>
    </div>
  );
};

export default Story;
