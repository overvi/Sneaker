import { create } from "zustand";

interface Counter {
  placeHolder: number;
  state: number;
  add: () => void;
  decrese: () => void;
  setPlaceHolder: (number: number) => void;
  reset: () => void;
}

const useCounter = create<Counter>((set) => ({
  placeHolder: 0,
  state: 0,
  add: () => set((store) => ({ state: store.state + 1 })),
  decrese: () => set((store) => ({ state: store.state > 0 ? -1 : 0 })),
  setPlaceHolder: (number: number) => set({ placeHolder: number }),
  reset: () => set({ state: 0 }),
}));

export default useCounter;
