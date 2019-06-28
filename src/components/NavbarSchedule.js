import React from "react";

const ScheduleNavbar = props => {
  return (
    <div className="container">
      <div className="navbar">
        <ul className="navbar-nav bg-light" style={{ listStyleType: "none" }}>
          {/* eslint-disable-next-line */}
          <a href="#" onClick = {props.handleClickForSchedule} name ="Sunday">Sunday</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick = {props.handleClickForSchedule} name ="Monday">Monday</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick = {props.handleClickForSchedule} name ="Tuesday">Tuesday</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick = {props.handleClickForSchedule} name ="Wednesday">Wednesday</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick = {props.handleClickForSchedule} name ="Thursday">Thursday</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick = {props.handleClickForSchedule} name ="Friday">Friday</a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick = {props.handleClickForSchedule} name ="Saturday">Saturday</a>
        </ul>
      </div>
    </div>
  );
};

export default ScheduleNavbar;
