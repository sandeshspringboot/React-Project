import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>&nbsp;&nbsp;
      <Link to="/about">About Us </Link>&nbsp;&nbsp;
      <Link to="/service">Service </Link>&nbsp;&nbsp;
      <Link to="/shop">Shop Now </Link>&nbsp;&nbsp;
      <Link to="/search">Search </Link>&nbsp;&nbsp;
      <Link to="/users">UsersDetails Axios </Link>&nbsp;&nbsp;
      <Link to="/login">Login Here </Link>&nbsp;&nbsp;
      <Link to="/register">Register Here </Link>&nbsp;&nbsp;
      <Link to="/usersapi">UseEffectDemo</Link>&nbsp;&nbsp;
      <Link to="/effect">UseEffectFetchDataAPI </Link>&nbsp;&nbsp;
      <Link to="/refhook">UseRef Demo</Link>&nbsp;&nbsp;
      <Link to="/bootstrap">BootStrapDemo</Link>&nbsp;&nbsp;
    </div>
  );
};

export default Navbar;