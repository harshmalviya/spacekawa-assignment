import React from "react";
import "../../styles/Components/UserInfo/UserInfo.css";
function UserInfo({ data }) {
  const name = data.name.title + " " + data.name.first + " " + data.name.last;
  return (
    <div className="user__info">
      <div className="user__info-image">
        <img src={data.picture.large} alt="" />
      </div>
      <div className="user__info-details">
        <h1 className="user__info-name">{name}</h1>
        <p className="user__info-address">
          {data.location.street.number +
            ", " +
            data.location.city +
            " " +
            data.location.state +
            " " +
            data.location.country +
            " " +
            data.location.postcode}
        </p>
        <p className="user__info-timezone">
          {data.location.timezone.offset +
            " - " +
            data.location.timezone.description}
        </p>
        <p className="user__info-gender">{data.gender}</p>
      </div>
    </div>
  );
}

export default UserInfo;
