import React from "react";
import "../App.css";
import About from "./About";
import Products from "./Products";
import Login from "./Login";
import Home from "./Home";
import QuizPage from "../QuizComponents/QuizPage";
import Footer from "./Footer";
import Logout from './Logout'

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../users/userSlice";

function Nav() {

  const user = useSelector(selectUser);
  return (
    <Router>
      <div className="nav__container">
        <div className="nav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Merch</Link>
              </li>
              <li>
                <Link to="/login">Account</Link>
              </li>

              <li>
                <Link to="/quiz">Quiz</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/quiz">
              <QuizPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/login">
              <Login/>
              <div>{user ? <Logout /> : <Login />}</div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Nav;
