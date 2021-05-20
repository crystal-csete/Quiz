import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
import { Layout, Menu } from "antd";
import {
  QuestionCircleOutlined,
  SmileOutlined,
  HomeOutlined,
  BarcodeOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function Nav() {
  const { Header } = Layout;

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
                <BarcodeOutlined /> Merch
              </Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">
                <LoginOutlined /> Login
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
