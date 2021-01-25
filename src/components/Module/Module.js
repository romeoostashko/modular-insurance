import React from "react";
import classes from "./Module.module.css";

const Module = (props) => {
  return (
    <div className={classes.Module}>
      <h2>{props.name}</h2>
    </div>
  );
};

export default Module;
