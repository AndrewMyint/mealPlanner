import React from "react";
import Search from "./Search.js";
import CheckPlanLink from './CheckPlanLink.js'

const NavBar = props => {
  console.log(props);
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        {/* eslint-disable-next-line */}
        <a className="navbar-brand">This is Brand</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* eslint-disable-next-line */}
            <a
              onClick={props.getRecipe}
              className="nav-link"
              name="breakfast"
              href="#"
            >
              Breakfast
            </a>
          </li>
          <li className="nav-item">
            {/* eslint-disable-next-line */}
            <a
              onClick={props.getRecipe}
              className="nav-link"
              name="lunch"
              href="#"
            >
              Lunch
            </a>
          </li>
          <li className="nav-item">
            {/* eslint-disable-next-line */}
            <a
              onClick={props.getRecipe}
              className="nav-link"
              name="dinner"
              href="#"
            >
              Dinner
            </a>
          </li>
          <li className="nav-item">
            {/* eslint-disable-next-line */}
            {/* <a className="nav-link" href="#">
              Check Plan
            </a> */}
            <CheckPlanLink />
          </li>
          <li className="nav-item">
            <Search searchRecipe={props.searchRecipe} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
