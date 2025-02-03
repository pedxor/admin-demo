import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { LuSquareCheck } from "react-icons/lu";
import logo from "./../assets/logo.svg";

const MySidebar: React.FC = () => {
  return (
    <>
      <Sidebar
        width="80px"
        rootStyles={{
          backgroundColor: "#f7f7f7",
          opacity: "1",
        }}
      >
        <Menu>
          <MenuItem
            className="bg-light flex h-22 w-full items-center justify-center logo-icon"
            component={<Link to="/" />}
            icon={<img src={logo} alt="Logo" className="h-full w-full" />}
          ></MenuItem>

          <MenuItem
            className="bg-light-secondary menu-item"
            component={<Link to="/home" />}
            icon={<BiHomeAlt />}
          >
            Home
          </MenuItem>

          <MenuItem
            className="bg-light-secondary menu-item"
            component={<Link to="/tasks-completed" />}
            icon={<LuSquareCheck />}
          >
            Tasks Completed
          </MenuItem>

          <div className="bg-light-secondary py-4 w-auto">
            <div className="w-10 border-t border-primary-dark mx-auto"></div>
          </div>

          {[...Array(4)].map((_, index) => (
            <MenuItem className="bg-light-secondary" key={index}>
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

export default MySidebar;
