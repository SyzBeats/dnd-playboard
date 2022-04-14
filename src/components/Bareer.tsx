import React from "react";
import classes from "./bareer.module.css";
import { Rnd } from "react-rnd";

const Bareer = () => {
  return (
    <Rnd
      default={{
        x: 50,
        y: 50,
        width: 100,
        height: 100,
      }}
      className={classes.bareer}
    >
      <div>Bareer</div>
    </Rnd>
  );
};

export { Bareer };
