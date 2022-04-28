import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { BlogPage } from "./containers/BlogPage/BlogPage";
import { LoginPage } from "./containers/LoginPage/LoginPage";

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("userName") === "admin");

  return (
    <Router>
      <div className="App">
        <Header
          userName={userName}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setIsAdmin={setIsAdmin}
        />

        <main>
          <Switch>

            <Route
              exact
              path="/"
              render={() => {
                if (isLoggedIn) return <Redirect to="/blog" />;
                return <Redirect to="/login" />;
              }}
            />

            <PublicRoute isLoggedIn={isLoggedIn} path="/login" exact>
              <LoginPage
                setIsLoggedIn={setIsLoggedIn}
                setUserName={setUserName}
                setIsAdmin={setIsAdmin}
              />
            </PublicRoute>

            <PrivateRoute isLoggedIn={isLoggedIn} path="/blog/:postId" exact>
              <Route isAdmin={isAdmin} />
            </PrivateRoute>

            <PrivateRoute isLoggedIn={isLoggedIn} path="/blog" exact>
              <BlogPage isAdmin={isAdmin} />
            </PrivateRoute>

          </Switch>
        </main>

      </div>
    </Router>
  );
}
