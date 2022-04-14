import React from "react";
import { Bareer } from "./Bareer";
import classes from "./bareer.module.css";

const BareerLayer = () => {
  return (
    <section className={classes.layer}>
      <Bareer />
    </section>
  );
};

export { BareerLayer };
