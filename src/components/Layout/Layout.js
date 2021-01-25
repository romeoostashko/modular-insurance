import React from "react";
import classes from "./Layout.module.css";
import Modules from "../Modules/Modules";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Modules />
    </div>
  );
};

export default Layout;
