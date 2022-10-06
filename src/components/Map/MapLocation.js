import React, { useState, useEffect } from "react";
import "./MapStyle.css";

export default function MapLocation(props) {
  return (
    <circle
      className="location"
      strokeWidth={props.active ? 2 : 0}
      cx={props.position.x}
      cy={props.position.y}
      onClick={props.userSelected}
      r="12"
    />
  );
}
