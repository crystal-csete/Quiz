import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";

import Nav from "./Components/Nav";
import About from "./Components/About";
import Products from "./Components/Products";
import Login from "./Components/Login";
import QuizPage from "./QuizComponents/QuizPage";
import Logout from "./Components/Logout";

const App = () => {
  const { Footer } = Layout;

  return (
    <Router>
      <div className="app__container">
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />{" "}
          <Route path="/logout" component={Logout} />
          <Route path="/quiz" component={QuizPage} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route component={Login} />
          <Route component={Logout} />
          <Route component={QuizPage} />
          <Route component={Products} />
          <Route component={About} />
        </Switch>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </div>
    </Router>
  );
};

export default App;
