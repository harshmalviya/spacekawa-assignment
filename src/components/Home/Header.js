import React from "react";
import "../../styles/Components/Header/Header.css";
function Header() {
  return (
    <nav className="nav">
      <div className="nav__logo nav__item">
        <a href="/home" className="nav__logo--default">YourChallenge</a>
        <a href="/home" className="nav__logo--mobile">YC</a>
      </div>

      <ul className="nav__list">
        <li className="nav__item selected">
          <a href="/">Product</a>
        </li>
        <li className="nav__item">
          <a href="/">Download</a>
        </li>
        <li className="nav__item">
          <a href="/">Pricing</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
