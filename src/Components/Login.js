import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../users/userSlice";
import { Card, Typography, Button } from "antd";
import {} from "@ant-design/icons";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Title } = Typography;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Card className="login__container">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <Title level={4}>Login here</Title>
        <input
          className="login__fields"
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="login__fields"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__fields"
          type="password"
          placeholder="Password"
          autoComplete="disabled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit__btn" type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default Login;
