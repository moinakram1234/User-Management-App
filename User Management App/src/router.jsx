import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./components/userForm";
import UserData from "./components/UserData";
import React from "react";

const ManageRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserData />} />
          <Route exact path="/adduser" element={<UserForm />} />
          <Route exact path="/userdata" element={<UserData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ManageRoute;
