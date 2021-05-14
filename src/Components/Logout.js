import React from "react";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../users/userSlice";
import { useSelector } from "react-redux";
import "./Logout.css";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <div className="logout__container">
      <h1 className="logout__container__title">
        Welcome <span className="user__name">{user.name}</span>
      </h1>
      <button className="logout__button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
      </div>
    </div>
  );
};

export default Logout;
