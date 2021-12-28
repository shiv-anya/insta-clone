import classes from "./PostImage.module.css";

const PostImage = (props) => {
  return (
    <div>
      <img
        className={classes.img}
        src={props.src}
        alt="image"
        height="600px"
        width="600px"
      />
    </div>
  );
};

export default PostImage;
