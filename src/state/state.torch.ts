import create from "zustand";

import { IPlaygroundState, ITorch } from "../types/interfaces";

const useTorchState = create<IPlaygroundState>((set) => ({
  currentTorch: null,
  torches: [],
  setTorches: (torches: ITorch[]) => set((state) => ({ ...state, torches })),
  addTorch: (torch: ITorch) => set((state) => ({ ...state, torches: [...state.torches, torch] })),
  removeTorch: (id: string) =>
    set((state) => ({
      ...state,
      torches: state.torches.filter((t) => t.id !== id),
    })),
  setCurrentTorch: (torch: ITorch) => set((state) => ({ ...state, currentTorch: torch })),
}));

export default useTorchState;