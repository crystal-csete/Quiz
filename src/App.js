import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./Components/About";
import Products from "./Components/Products";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import QuizPage from "./QuizComponents/QuizPage";

import "./App.css";
import {
  Typography,
  Layout,
  Menu,
  Avatar,
  Image,
  Card,
  Breadcrumb,
} from "antd";
import {
  UserOutlined,
  HeartOutlined,
  CoffeeOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
  HomeOutlined,
  BarcodeOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
// import mug from "./assets/mug.jpg";

const App = () => {
  const { Title } = Typography;
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;

  return (
    <Router>
      <div className="app__container">
        <Layout>
          <Header style={{ padding: 10 }}>
            <Title style={{ color: "rgb(77, 55, 9)" }} level={3}>
              <CoffeeOutlined />
              Logo
              <Avatar style={{ float: "right" }} icon={<HeartOutlined />} />
            </Title>
          </Header>
          <Layout>
            <Sider>
              <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
                <Menu.Item key="Dashboard">Dashboard</Menu.Item>
                <SubMenu
                  title={
                    <span>
                      <UserOutlined />
                      <span>Menu</span>
                    </span>
                  }
                >
                  <Menu.ItemGroup key="menu" title="Options">
                    <Menu.Item key="home">
                      <Link to="/">
                        <HomeOutlined /> Home
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="aboutus">
                      <Link to="/about">
                        <SmileOutlined /> About Us
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="products">
                      <Link to="/products">
                        <BarcodeOutlined />
                        Merch
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="login">
                      <Link to="/login">
                        <LoginOutlined />
                        Login
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="logout">
                      <Link to="/logout">
                        <LogoutOutlined />
                        Logout
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="quiz">
                      <Link to="/quiz">
                        <QuestionCircleOutlined />
                        Take a Quiz!
                      </Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </Sider>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
              <Route path="/quiz">
                <QuizPage />
              </Route>
            </Switch>

            <Layout>
              <Content className="app__content" style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Welcome</Breadcrumb.Item>
                </Breadcrumb>
                <div className="app__card__container">
                  {/* <Card className="app__card image">
                    <Avatar
                      shape="square"
                      size={200}
                      src={<Image preview={false} src={mug} />}
                    />
                  </Card> */}
                  <Card className="app__card">
                    <Title level={3}>Welcome to *App Name Here*</Title>
                    <p>
                      Welcome to this page! While this site is not quite up and
                      running, feel free to look around!
                    </p>
                  </Card>
                </div>
              </Content>
              <Footer>&#169; 2021 Crystal's Pages All Rights Reserved.</Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
