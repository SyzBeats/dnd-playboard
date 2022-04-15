import React from "react";
import classes from "./button.module.css";

interface Props {
  children: React.ReactNode;
  clickHandler: () => void;
  dragHandler?: (e: React.MouseEvent) => void;
  draggable?: boolean;
}

const Button = ({ children, clickHandler, dragHandler = () => null, draggable = false }: Props) => {
  return (
    <button onClick={clickHandler} className={classes.button} draggable={draggable} onDragEnd={dragHandler}>
      {children}
    </button>
  );
};

export { Button };
