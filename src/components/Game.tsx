import React from "react";
import { BareerLayer } from "./BareerLayer";
import Controller from "./Controller";
import { Playground } from "./Playground";

const Game = () => {
  return (
    <>
      <Playground />
      <BareerLayer />
      <Controller />
    </>
  );
};

export { Game };
