import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<CreatePost />} />
      <Route path="/postCard" element={<PostCard />} />
    </Routes>
  );
};

export default AppRoutes;
