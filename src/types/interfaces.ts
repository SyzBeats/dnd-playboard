export interface ITorch {
  name: string;
  id: string;
  x: number;
  y: number;
  round: boolean;
  size: string;
}

export interface IBareer {
  name: string;
  id: string;
  x: number;
  y: number;
  round: boolean;
  size: string;
}
export interface IPlaygroundState {
  currentTorch: ITorch | null;
  torches: ITorch[];
  setTorches: (torches: ITorch[]) => any;
  addTorch: (torch: ITorch) => any;
  setCurrentTorch: (torch: ITorch) => any;
  removeTorch: (id: string) => any;
}

export interface IBareerState {
  currentBareer: IBareer | null;
  bareeres: IBareer[];
  setBareeres: (Bareeres: IBareer[]) => any;
  addBareer: (Bareer: IBareer) => any;
  setCurrentBareer: (Bareer: IBareer) => any;
  removeBareer: (id: string) => any;
}

export interface IAppCssState {
  scale: number;
  previewMode: boolean;
  setScale: (scale: number) => any;
  setPreviewMode: (mode: boolean) => any;
}
