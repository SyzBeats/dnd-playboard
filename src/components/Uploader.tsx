import React from "react";
import { useAppCssState } from "../state";
import classes from "./uploader.module.css";

const Uploader = () => {
  const appState = useAppCssState((state) => ({
    backgroundImage: state.backgroundImage,
    setBackgroundImage: state.setBackgroundImage,
  }));

  const createObjectUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.length) {
      return;
    }

    const file = e.target.files[0];

    const url = createObjectUrl(file);

    appState.setBackgroundImage(url);

    // set css background image variable
    document.documentElement.style.setProperty("--background-image", `url(${url})`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.title}>Upload an image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
      </div>
    </div>
  );
};

export { Uploader };
