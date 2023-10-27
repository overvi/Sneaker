import { create } from "zustand";

interface Activity {
  isActive: boolean;
  setIsActive: (action: boolean) => void;
}

const useActive = create<Activity>((set) => ({
  isActive: false,
  setIsActive: (action: boolean) => set({ isActive: action }),
}));

export default useActive;
