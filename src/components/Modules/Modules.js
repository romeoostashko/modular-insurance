import React, { useEffect } from "react";
import classes from "./Modules.module.css";
import Module from "../Module/Module";
import { connect } from "react-redux";
import * as typeAction from "../../store/actions";

const Modules = (props) => {
  const arr = [
    {
      name: "Bike",
      coverageMin: 0,
      coverageMax: 3000,
      risk: 0.3,
    },
    {
      name: "Jewelry",
      coverageMin: 500,
      coverageMax: 10000,
      risk: 0.05,
    },
    {
      name: "Electronics",
      coverageMin: 500,
      coverageMax: 6000,
      risk: 0.35,
    },
    {
      name: "Sports Equipment",
      coverageMin: 0,
      coverageMax: 20000,
      risk: 0.3,
    },
  ];

  useEffect(() => {
    props.dataToArrModules(arr);
  }, []);

  const modules = arr.map((module) => (
    <Module key={module.name} name={module.name}></Module>
  ));

  return <div className={classes.Modules}>{modules}</div>;
};

const mapStateToProps = (state) => {
  return {
    arrModules: state.modules.arrModules,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataToArrModules: (arr) =>
      dispatch({ type: typeAction.DATA_TO_ARR_MODULES, arr }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modules);
