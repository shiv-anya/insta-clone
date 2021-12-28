import Card from "../../UI/Card";
import classes from "./Post.module.css";
import PostHead from "./PostHead";
import PostImage from "./PostImage";
import ActionTab from "./ActionsTab";
import CommentSection from "./CommentSection";
import CommentsInput from "./CommentsInput";
import User1 from "../../assets/User1.jpg";

const Post = (props) => {
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <PostHead username={props.username} src={User1} />
        <PostImage src={props.img} />
        <ActionTab
          username={props.username}
          caption={props.caption}
          likes="2,062"
        />

        <CommentsInput />
      </Card>
    </div>
  );
};

export default Post;
