import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: true,
  login: (token) => {},
  logout: () => {},
  userHandler: () => {},
  username: "",
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const isUserLogged = !!token;
  const userHandler = (username) => {
    setUsername(username);
  };
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };
  const ctxValue = {
    token: token,
    isLoggedIn: isUserLogged,
    login: loginHandler,
    logout: logoutHandler,
    userHandler: userHandler,
    username: username,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
