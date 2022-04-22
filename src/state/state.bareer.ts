import create from 'zustand';

import { IBareerState, IBareer } from '../types/interfaces';

const useBareerState = create<IBareerState>(set => ({
	currentBareer: null,
	bareeres: [],
	setBareeres: (Bareeres: IBareer[]) => set(state => ({ ...state, Bareeres })),
	addBareer: (Bareer: IBareer) => set(state => ({ ...state, bareeres: [...state.bareeres, Bareer] })),
	removeBareer: (id: string) =>
		set(state => ({
			...state,
			bareeres: state.bareeres.filter(b => b.id !== id),
		})),
	setCurrentBareer: (Bareer: IBareer) => set(state => ({ ...state, currentBareer: Bareer })),
}));

export default useBareerState;
