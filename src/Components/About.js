import React from "react";
import { Card, Typography } from "antd";
import {
  SmileOutlined,
  HeartOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import "./About.css";

const About = () => {
  const { Title } = Typography;

  return (
    <>
      <Card className="about__card">
        <Title level={2}>
          All About Us <SmileOutlined />
        </Title>
        <p>
          What is <CoffeeOutlined /> about? We want to give you a great
          experience as a user. Right now, this site is not operational. We
          wanted to give you a sneak peek of what is to come.
        </p>
        <Title level={4}>Quiz Time</Title>
        <p>
          Here we offer a free quiz. It is supposed to be fun... nothing to
          serious. <HeartOutlined /> So go ahead, and take a short quiz, and see
          if this is for you!
        </p>
        <Title level={4}>Merch</Title>
        <p>
          Take a look at some cool merch we have here at <CoffeeOutlined />. It
          is not functional yet, but you can get a preview of what we will be
          selling. Great for when you want to hang out in a Colorado Mountain
          trail, soaking up the sun rays, we have basic clothes to keep you
          stylin in the mountains. Hint: Use sunscreen, the UV Index is crazy up
          there!
        </p>
        <Title level={4}>Login</Title>
        <p>
          Login, or look around as a guest. If you want to purchase an item from
          our Merch store, you have to login.
        </p>
      </Card>
    </>
  );
};

export default About;
