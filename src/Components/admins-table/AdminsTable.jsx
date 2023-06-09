import React from "react";
import "./admin-table.css";

const DUMMYDATA = [
  {
    username: "momen",
    profile: require("../../images/Avatar(4).png"),
    role: "admin",
    emailAddress: "mm@example.com",
    access: "user",
    dateOfAdded: "2020-06-09",
  },
  {
    username: "momen",
    profile: require("../../images/Avatar(2).png"),
    role: "admin",
    emailAddress: "mm@example.com",
    access: "user",
    dateOfAdded: "2020-06-09",
  },
  {
    username: "momen",
    profile: require("../../images/Avatar.png"),
    role: "admin",
    emailAddress: "mm@example.com",
    access: "user",
    dateOfAdded: "2020-06-09",
  },
  {
    username: "momen",
    profile: require("../../images/Avatar(1).png"),
    role: "admin",
    emailAddress: "mm@example.com",
    access: "user",
    dateOfAdded: "2020-06-09",
  },
  {
    username: "momen",
    profile: require("../../images/Avatar.png"),
    role: "admin",
    emailAddress: "mm@example.com",
    access: "user",
    dateOfAdded: "2020-06-09",
  },
  {
    username: "momen",
    profile: require("../../images/Avatar(3).png"),
    role: "admin",
    emailAddress: "mm@example.com",
    access: "user",
    dateOfAdded: "2020-06-09",
  },
  {
    username: "momen",
    profile: require("../../images/Avatar(2).png"),
    role: "admin",
    emailAddress: "mm@example.com",
    access: "user",
    dateOfAdded: "2020-06-09",
  },
];

const AdminsTable = () => {
  return (
    <>
      <table className="table-parent">
        <tr className="table-header-container">
          <th>Name</th>
          <th>Role</th>
          <th>Email Address</th>
          <th>Access</th>
          <th>Date of Added</th>
          <th></th>
        </tr>

        {DUMMYDATA.map((admin) => {
          return (
            <tr className="table-user-container">
              <td>
                <span className="table-user-img-container">
                  <img src={admin.profile} alt="img" />
                </span>{" "}
                {admin.username}
              </td>
              <td>{admin.role}</td>
              <td>{admin.emailAddress}</td>
              <td>{admin.access}</td>
              <td>{admin.dateOfAdded}</td>
              <td>
                <i class="bi bi-trash3"></i>
                <i class="bi bi-pencil-square"></i>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default AdminsTable;
