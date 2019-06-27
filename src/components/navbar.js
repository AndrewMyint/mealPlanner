import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light my-lg-0 justify-content-end">
      <div className="row">
        {/* eslint-disable-next-line */}
        <a  onClick = {props.getRecipe} className="navbar-brand col col-lg" name = "breakfast" href="#">
          Breakfast
        </a>
        {/* eslint-disable-next-line */}
        <a onClick = {props.getRecipe} className="navbar-brand col col-lg" name = "lunch" href="#">
          Lunch
        </a>
         {/* eslint-disable-next-line */}
        <a onClick = {props.getRecipe} className="navbar-brand col col-lg" name = "dinner" href="#">
          Dinner
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
