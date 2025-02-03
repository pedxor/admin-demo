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
            className="bg-light logo-icon flex h-22 w-full items-center justify-center"
            component={<Link to="#" />}
            icon={<img src={logo} alt="Logo" className="h-full w-full" />}
          ></MenuItem>

          <MenuItem
            className="bg-light-secondary menu-item"
            component={<Link to="#" />}
            icon={<BiHomeAlt />}
          >
            Home
          </MenuItem>

          <MenuItem
            className="bg-light-secondary menu-item"
            component={<Link to="#" />}
            icon={<LuSquareCheck />}
          >
            Tasks Completed
          </MenuItem>

          <div className="bg-light-secondary w-auto py-4">
            <div className="border-primary-dark mx-auto w-10 border-t"></div>
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
