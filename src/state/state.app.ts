import create from "zustand";

import { IAppCssState } from "../types/interfaces";

/**
 * @description collection of App states and
 * manipulations that affect the app's style or layout
 */
const useAppCssState = create<IAppCssState>((set) => ({
  scale: 1,
  previewMode: true,
  setScale: (scale: number) => {
    return set((state) => {
      // set global custom property css scale
      document.documentElement.style.setProperty("--scale", scale.toString());

      return { ...state, scale };
    });
  },
  setPreviewMode: (mode: boolean) => set((state) => ({ ...state, previewMode: mode })),
}));

export default useAppCssState;
