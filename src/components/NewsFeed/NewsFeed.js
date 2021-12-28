import Header from "../Layout/Header";
import Story from "../Story/Story";
import Post from "../Post/Post";
import Footer from "../Footer/Footer";
import classes from "./NewsFeed.module.css";
import { Fragment, useContext, useEffect } from "react";
import Aside from "../Suggestions/Aside";
import { useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import AuthContext from "../../store/auth-ctx";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const authCtx = useContext(AuthContext);
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setPosts(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        post: doc.data(),
      }))
    );
  }, [posts]);

  return (
    <Fragment>
      <Header />
      <div className={classes.main}>
        <div className={classes.left}>
          <Story />

          {posts.map((data) => (
            <Post
              key={data.post.id}
              username={authCtx.username}
              img={data.post.img}
              caption={data.post.caption}
            />
          ))}
        </div>
        <div className={classes.right}>
          <Aside username={authCtx.username} />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default NewsFeed;
