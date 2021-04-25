import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Nabar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Nabar.defaultProps = {
  title: "GitHub Finder!!",
  icon: "fab fa-github",
};

Nabar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Nabar;
