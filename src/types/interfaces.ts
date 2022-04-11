export interface IPlaygroundState {
	currentTorch: Torch | null;
	torches: Torch[];
	setTorches: (torches: Torch[]) => any;
	addTorch: (torch: Torch) => any;
	setCurrentTorch: (torch: Torch) => any;
	removeTorch: (id: string) => any;
}

export interface Torch {
	id: string;
	x: number;
	y: number;
	round: boolean;
	size: string;
}
