import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import image from "../../images/sidebar-header-icon.png";

const SideBar = () => {
  return (
    <aside className="sidebar-parent">
      <div className="sidebar-header">
        <div className="sidebar-header-child">
          <img src={image} alt="this is header img" /> <span>Gamly</span>
        </div>
      </div>

      <div className="sidebar-links">
        <ul className="links-container">
          <li>
            <Link to="/">
              <i className="bi bi-grid-1x2"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/admins">
              <i className="bi bi-person-gear"></i> Admins
            </Link>
          </li>
          <li>
            <Link to="/revenue">
              <i className="bi bi-cash-stack"></i> Revenue
            </Link>
          </li>
          <li>
            <Link to="/sakes">
              <i className="bi bi-cart-plus"></i> Sakes
            </Link>
          </li>
          <li>
            <Link to="/payout">
              <i className="bi bi-cart-plus"></i> Payout
            </Link>
          </li>
          <li>
            <Link to="/page-management">
              <i className="bi bi-file-text"></i> Page Management
            </Link>
          </li>
          <li>
            <Link to="/report">
              <i className="bi bi-graph-up"></i> Report
            </Link>
          </li>
        </ul>

        <div className="bottom-container">
          <ul>
            <li>
              <i className="bi bi-gear"></i> Settings
            </li>
            <li>
              <i className="bi bi-box-arrow-right"></i> Logout
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
