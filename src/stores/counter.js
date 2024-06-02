import { create } from "zustand";

export const useCounterStore = create((set) => ({
  counter: 0,
  increasePopulation: () => set((state) => ({ counter: state.counter + 1 })),
  removeAllCounter: () => set({ counter: 0 }),
  updateCounter: (newCounter) => set({ counter: newCounter }),
}));
