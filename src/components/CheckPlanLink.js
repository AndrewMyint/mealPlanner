import React from 'react';
import {NavLink} from "react-router-dom";

const CheckPlanLink = () => {
  return (
    <div className = "nav-link navbar-light">
      <NavLink to="/check_plan"> check plan </NavLink>
    </div>
  )
}

export default CheckPlanLink;