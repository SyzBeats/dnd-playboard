import React from "react";
import { IoFlashlightSharp, IoTrash, IoAdd, IoRemove, IoShapes } from "react-icons/io5";
import { GiBrickWall } from "react-icons/gi";
import { VscOpenPreview } from "react-icons/vsc";

import { useAppCssState, useTorchState, useBareerState } from "../state";
import { Button } from "./Button";

import classes from "./controller.module.css";

const Controller = () => {
  // torch state handler
  const torchState = useTorchState((state) => ({
    add: state.addTorch,
    remove: state.removeTorch,
    current: state.currentTorch,
    toggleShape: state.toggleCurrentTorchShape,
  }));

  // Bareer state handler
  const bareerState = useBareerState((state) => ({
    add: state.addBareer,
    current: state.currentBareer,
  }));

  // App state handler
  const appCssState = useAppCssState((state) => ({
    scale: state.scale,
    setScale: state.setScale,
    preview: state.previewMode,
    setPreviewMode: state.setPreviewMode,
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
      round: true,
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

  const handleDragStart = (e: React.MouseEvent) => {
    // add torch on new position
    torchState.add({
      name: `${Math.random()}`,
      id: `torch-${Math.random()}`,
      x: e.clientX / appCssState.scale,
      y: e.clientY / appCssState.scale,
      round: true,
      size: "small",
    });
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

  // toggle the app preview mode on/off
  const handleTogglePreview = () => {
    appCssState.setPreviewMode(!appCssState.preview);
  };

  const handleToggleShape = () => {
    if (!torchState.current) {
      return;
    }

    torchState.toggleShape(torchState?.current?.id);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Button clickHandler={() => handleAddTorch()} draggable dragHandler={(e) => handleDragStart(e)}>
          <IoFlashlightSharp size={"20px"} />
        </Button>
        <Button clickHandler={() => handleRemoveTorch()}>
          <IoTrash size={"20px"} />
        </Button>
        <Button clickHandler={() => handleAddBareer()}>
          <GiBrickWall size={"20px"} />
        </Button>
        <Button clickHandler={() => handleToggleShape()}>
          <IoShapes size={"20px"} />
        </Button>
        <Button clickHandler={() => handleSetScale("increment")}>
          <IoAdd size={"20px"} />
        </Button>
        <Button clickHandler={() => handleSetScale("decrement")}>
          <IoRemove size={"20px"} />
        </Button>
        <Button clickHandler={() => handleTogglePreview()}>
          <VscOpenPreview size={"20px"} />
        </Button>
      </div>
    </div>
  );
};

export default Controller;
