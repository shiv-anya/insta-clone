import { useEffect, useRef, useState } from "react";
import instaLogo from "../../assets/Instagram_logo.svg";
import Card from "../../UI/Card";
import classes from "./AuthForm.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-ctx";
import { useHistory } from "react-router";
import Loader from "../../UI/Loader";
import { auth } from "../../firebase";
import DefaultUser from "../../assets/user.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        authCtx.userHandler(authUser.displayName);
      } else {
        setUser(null);
      }
      return unsubscribe();
    });
  }, [user, username]);
  const signUpHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const username = usernameInputRef.current.value;
    setEmail(email);
    setPassword(password);
    setUsername(username);
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        setIsLoading(false);
        const user = authUser.user;
        authCtx.login(user.stsTokenManager.accessToken);
        history.replace("/user");
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: DefaultUser,
        })
          .then((res) => {
            authCtx.userHandler(username);
          })
          .catch((error) => {});
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
      });
  };

  const loginHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        setIsLoading(false);
        console.log(authUser);
        authCtx.login(authUser.user.uid);
        history.replace("/user");
        authCtx.userHandler(authUser.user.displayName);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
        authCtx.userHandler(username);
      });
  };
  return (
    <div className={classes.authform}>
      <Card>
        <img src={instaLogo} alt="Logo" />
        <form onSubmit={!isLogin ? signUpHandler : loginHandler}>
          <input
            type="email"
            placeholder="Phone no, username or email"
            ref={emailInputRef}
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
          {!isLogin && (
            <input type="text" placeholder="username" ref={usernameInputRef} />
          )}

          {!isLoading && <button>{isLogin ? "Log In" : "Sign Up"}</button>}
          {isLoading && (
            <button>
              <Loader />
            </button>
          )}
        </form>
      </Card>
      <Card className={classes.card}>
        <div>
          {isLogin && <p>Don't have an account?</p>}
          {!isLogin && <p>Have an account?</p>}
          <a onClick={switchHandler} className={classes.btn}>
            {isLogin ? "Sign up" : "Log In"}
          </a>
        </div>
      </Card>
    </div>
  );
};

export default AuthForm;
