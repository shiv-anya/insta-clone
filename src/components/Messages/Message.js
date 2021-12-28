import classes from "./Message.module.css";
import Card from "../../UI/Card";
import Header from "../Layout/Header";
import UserBar from "./UserBar";
import MessageContainer from "./MessageContainer";
import MessageBox from "./MessageBox";

const Message = () => {
  return (
    <div>
      <div className={classes.header}>
        <Header />
      </div>
      <div>
        <Card className={classes.card}>
          <div className={classes.messages}>
            <UserBar />
            <MessageContainer />
          </div>
          <MessageBox />
        </Card>
      </div>
    </div>
  );
};

export default Message;
