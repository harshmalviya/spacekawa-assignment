import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import "../../styles/Components/UserCard/UserCard.css";
function UserCard({ user }) {
  const name = user.name.title + " " + user.name.first + " " + user.name.last;
  const ctx = useContext(UserContext);
  const showUserDetails = () => {
    ctx.getUser(user.login.uuid);
  };
  return (
    <div
      className={`user__card ${
        ctx.selectedUser &&
        ctx.selectedUser.login.uuid === user.login.uuid &&
        "user__card--selected"
      }`}
      onClick={showUserDetails}
    >
      <p className="user__card-top">
        <span className="user__gender">{user.gender}</span>
        &nbsp;.&nbsp;
        {user.nat}
      </p>
      <p className="user__card-middle">{name.substring(0, 18)}</p>
      <p className="user__card-bottom">{user.email}</p>
    </div>
  );
}

export default UserCard;
