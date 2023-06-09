import React from "react";
import "./admin.css";
import AdminsTable from "../../Components/admins-table/AdminsTable";

const Admins = () => {
  return (
    <main className="admins-page-parent">
      <section className="admin-header">
        <p className="text">Here’s a list of all your gamyly admins</p>

        <button className="header-admin-btn">
          <i className="bi bi-plus"></i>
          <br />
          Add Admin
        </button>
      </section>

      {/* admins list section */}
      {/* admins list section */}

      <section className="admins-list-container">
        <div className="admins-list-search">
          <form action="">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search" />
          </form>

          <button>
            <i className="bi bi-arrow-clockwise"></i> Refresh
          </button>
        </div>
        <div className="admins-list-header-container">
          <h5>
            Admin <span>1000 admins</span>
          </h5>
        </div>
        <div className="admins-table-container">
          <AdminsTable />
        </div>
      </section>
    </main>
  );
};

export default Admins;
