import React from "react";
import { Rnd } from "react-rnd";

import classes from "./bareer.module.css";
import { useBareerState, useAppCssState } from "../state";

interface Props {
  id: string;
  round?: boolean;
  x: number;
  y: number;
  size: string;
}

const Bareer = (props: Props) => {
  const setCurrentBareer = useBareerState((state) => state.setCurrentBareer);

  const classList = [classes.torch];

  // get the scale value
  const appCssState = useAppCssState((state) => ({
    scale: state.scale,
  }));

  if (props.size) {
    classList.push(classes[props.size]);
  }

  if (props.round) {
    classList.push(classes.round);
  }

  return (
    <div className={classes.wrapper}>
      <Rnd
        className={classes.bareer}
        scale={appCssState.scale}
        onMouseDown={() =>
          setCurrentBareer({
            ...props,
            round: !!props.round,
            name: `${Math.random()}`,
          })
        }
      >
        <div className={classes.content}></div>
      </Rnd>
    </div>
  );
};

export { Bareer };
