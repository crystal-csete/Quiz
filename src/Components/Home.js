import React from "react";
import "./Home.css";
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
} from "@ant-design/icons";
import mug from "../assets/mug.jpg";

const Home = () => {
  const { Title } = Typography;
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;

  return (
    <div className="home__container">
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
                  <Menu.Item key="home">Home</Menu.Item>
                  <Menu.Item key="aboutus">
                    <SmileOutlined /> About Us
                  </Menu.Item>
                  <Menu.Item key="products">Merch</Menu.Item>
                  <Menu.Item key="login">Login</Menu.Item>
                  <Menu.Item key="quiz">
                    <QuestionCircleOutlined />
                    Take a Quiz!
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content className="home__content" style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Welcome</Breadcrumb.Item>
              </Breadcrumb>
              <div className="home__card__container">
                <Card className="home__card image">
                  <Avatar
                    shape="square"
                    size={200}
                    src={<Image preview={false} src={mug} />}
                  />
                </Card>
                <Card className="home__card">
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
  );
};

export default Home;
