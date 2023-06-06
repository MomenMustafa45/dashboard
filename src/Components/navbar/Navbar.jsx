import React from "react";
import "./navbar.css";
import image from "../../images/Avatar.png";

const Navbar = () => {
  return (
    <nav className="navbar-parent">
      <div className="navbar-left-side">
        <div className="access">
          <p>Admin</p>
        </div>
        <form>
          <select>
            <option value="admin">Admin</option>
            <option value="admin">User</option>
            <option value="admin">Host</option>
          </select>
        </form>
      </div>

      <div className="navbar-right-side">
        <form className="navbar-search-container">
          <i className="bi bi-search"></i>
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Type Here"
          />
        </form>

        <i className="bi bi-gear"></i>
        <i className="bi bi-bell"></i>

        <div className="navbar-img-container">
          <img src={image} alt="this is a img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
