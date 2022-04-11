import create from 'zustand';
import { IPlaygroundState, Torch } from '../types/interfaces';

const torches = [{ id: `${Math.random()}`, x: 0, y: 0, round: true, size: 'small' }];

const useTorchState = create<IPlaygroundState>(set => ({
	currentTorch: null,
	torches: torches || [],
	setTorches: (torches: Torch[]) => set(state => ({ ...state, torches })),
	addTorch: (torch: Torch) => set(state => ({ ...state, torches: [...state.torches, torch] })),
	removeTorch: (id: string) => set(state => ({ ...state, torches: state.torches.filter(t => t.id !== id) })),
	setCurrentTorch: (torch: Torch) => set(state => ({ ...state, currentTorch: torch })),
}));

export { useTorchState };
