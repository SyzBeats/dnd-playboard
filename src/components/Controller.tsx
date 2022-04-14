import React from "react";
import { Rnd } from "react-rnd";
import { IoFlashlightSharp, IoTrash, IoAdd, IoRemove } from "react-icons/io5";
import { GiBrickWall } from "react-icons/gi";
import { useAppCssState, useTorchState, useBareerState } from "../state";
import { Button } from "./Button";

import classes from "./controller.module.css";

const Controller = () => {
  // torch state handler
  const torchState = useTorchState((state) => ({
    add: state.addTorch,
    remove: state.removeTorch,
    current: state.currentTorch,
  }));

  // torch state handler
  const bareerState = useBareerState((state) => ({
    add: state.addBareer,
    current: state.currentBareer,
  }));

  // app state handler
  const appCssState = useAppCssState((state) => ({
    scale: state.scale,
    setScale: state.setScale,
  }));

  /**
   * @description adding a new torch with default values
   */
  const handleAddTorch = () => {
    torchState.add({
      name: `${Math.random()}`,
      id: `torch-${Math.random()}`,
      x: 25,
      y: 25,
      round: false,
      size: "small",
    });
  };

  /**
   * @description adding a new torch with default values
   */
  const handleAddBareer = () => {
    bareerState.add({
      name: `${Math.random()}`,
      id: `torch-${Math.random()}`,
      x: 25,
      y: 25,
      round: false,
      size: "small",
    });
  };

  /**
   * @description removing a torch from the playground
   * by clicking the button on the panel
   */
  const handleRemoveTorch = () => {
    if (!torchState.current) {
      return;
    }

    torchState.remove(torchState.current.id);
  };

  /**
   * @description changing the size of field
   * @param operator decide if the scale should be increased or decreased
   */
  const handleSetScale = (operator: "increment" | "decrement") => {
    if (operator === "increment") {
      appCssState.setScale(appCssState.scale + 0.3);
    }

    if (operator === "decrement") {
      appCssState.setScale(appCssState.scale - 0.3);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Rnd className={classes.controller} enableResizing={false}>
        <div className={classes.container}>
          <Button clickHandler={() => handleAddTorch()}>
            <IoFlashlightSharp size={"20px"} />
          </Button>
          <Button clickHandler={() => handleRemoveTorch()}>
            <IoTrash size={"20px"} />
          </Button>
          <Button clickHandler={() => handleSetScale("increment")}>
            <IoAdd size={"20px"} />
          </Button>
          <Button clickHandler={() => handleSetScale("decrement")}>
            <IoRemove size={"20px"} />
          </Button>
          <Button clickHandler={() => handleAddBareer()}>
            <GiBrickWall size={"20px"} />
          </Button>
        </div>
      </Rnd>
    </div>
  );
};

export default Controller;
