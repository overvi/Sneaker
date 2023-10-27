import { create } from "zustand";

interface ImageControl {
  selectedImage: number;
  setSelectedImage: (number: number) => void;

  next: () => void;
  previous: () => void;
}

const useImages = create<ImageControl>((set) => ({
  selectedImage: 1,
  setSelectedImage: (number: number) => set({ selectedImage: number }),

  next: () =>
    set((store) => ({
      selectedImage:
        store.selectedImage !== 4
          ? store.selectedImage + 1
          : store.selectedImage,
    })),
  previous: () =>
    set((store) => ({
      selectedImage: store.selectedImage !== 1 ? store.selectedImage - 1 : 1,
    })),
}));

export default useImages;
