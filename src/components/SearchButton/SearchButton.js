import React from "react";
import { Link } from "react-router-dom";
import "./SearchButton.scss";

const SearchButton = () => {
  return (
    <div className="nav-icons-search">
      <Link to="/search" style={{ textDecoration: "none" }}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </Link>
    </div>
  );
};
export default SearchButton;
