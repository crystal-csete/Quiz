import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../users/userSlice";
import Login from "./Login";
import Logout from "./Logout";

import "./Nav.css";
import { Layout, Menu } from "antd";
import {
  QuestionCircleOutlined,
  SmileOutlined,
  HomeOutlined,
  BarcodeOutlined,
  LoginOutlined,
  LogoutOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

function Nav() {
  const { Header } = Layout;
  const user = useSelector(selectUser);

  return (
    <div className="nav__container">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
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
                <DollarCircleOutlined /> Merch
              </Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">
                <LoginOutlined /> Login
                <div>{user ? <Logout /> : <Login />}</div>
              </Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <Link to="/logout">
                <LogoutOutlined /> Logout
              </Link>
            </Menu.Item>
            <Menu.Item key="quiz">
              <Link to="/quiz">
                <QuestionCircleOutlined /> Take a Quiz!
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default Nav;
