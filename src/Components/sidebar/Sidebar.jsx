import React from "react";
import "./sidebar.css";
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
            <i className="bi bi-grid-1x2"></i> Home
          </li>
          <li>
            <i className="bi bi-person-gear"></i> Admins
          </li>
          <li>
            <i className="bi bi-cash-stack"></i> Revenue
          </li>
          <li>
            <i className="bi bi-cart-plus"></i> Sakes
          </li>
          <li>
            <i className="bi bi-cart-plus"></i> Payout
          </li>
          <li>
            <i className="bi bi-file-text"></i> Page Management
          </li>
          <li>
            <i className="bi bi-graph-up"></i> Report
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
