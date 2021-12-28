import { Route, Switch } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-ctx";
import NewsPage from "./pages/NewsPage";
import Auth from "./pages/Auth";
import MessagePage from "./pages/MessagePage";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Switch>
        {!authCtx.isLoggedIn && (
          <Route path="/" exact>
            <Auth />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/user">
            <NewsPage />
          </Route>
        )}
        <Route path="/message">
          <MessagePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
