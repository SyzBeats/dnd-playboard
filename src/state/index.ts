import create from 'zustand';

import { IAppCssState, IPlaygroundState, Torch } from '../types/interfaces';

const torches = [{ id: `${Math.random()}`, x: 50, y: 50, round: true, size: 'small' }];

const useTorchState = create<IPlaygroundState>((set) => ({
	currentTorch: null,
	torches: torches || [],
	setTorches: (torches: Torch[]) => set((state) => ({ ...state, torches })),
	addTorch: (torch: Torch) => set((state) => ({ ...state, torches: [...state.torches, torch] })),
	removeTorch: (id: string) => set((state) => ({ ...state, torches: state.torches.filter((t) => t.id !== id) })),
	setCurrentTorch: (torch: Torch) => set((state) => ({ ...state, currentTorch: torch })),
}));

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
			document.documentElement.style.setProperty('--scale', scale.toString());

			return { ...state, scale };
		});
	},
	setPreviewMode: (mode: boolean) => set((state) => ({ ...state, previewMode: mode })),
}));

export { useTorchState, useAppCssState };
