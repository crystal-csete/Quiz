import React from "react";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../users/userSlice";
import { useSelector } from "react-redux";
import { Card, Typography } from "antd";
import "./Logout.css";

const Logout = () => {
  const { Title } = Typography;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <Card className="logout__container">
      <Title level={2}>
        Welcome <span className="user__name">{user.name}</span>
      </Title>
      <button className="logout__btn" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </Card>
  );
};

export default Logout;
