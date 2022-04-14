import React from "react";
import classes from "./bareer.module.css";
import { Rnd } from "react-rnd";

const Bareer = () => {
  return (
    <div className={classes.wrapper}>
      <Rnd className={classes.bareer}>
        <div>Bareer</div>
      </Rnd>
    </div>
  );
};

export { Bareer };
