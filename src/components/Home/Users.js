import React from "react";
import UserCard from "./UserCard";
import "../../styles/Components/Users/Users.css";
function Users({ data }) {
  return (
    <div className="users">
      {data.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default Users;
