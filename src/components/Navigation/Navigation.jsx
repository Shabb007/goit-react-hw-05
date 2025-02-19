import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";
import React from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink to="/" className={buildLinkClass}>
      Home
    </NavLink>
    <NavLink to="/movies" className={buildLinkClass}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
