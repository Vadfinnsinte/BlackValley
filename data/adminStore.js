import { create } from "zustand";

export const adminStore = create((set) => ({
  loginModalOpen: false,
  setLoginModalOpen: (value) => set({ loginModalOpen: value }),

  userId: "",
  setUserId: (value) => set({ userId: value }),
  openAddWool: false,
  setOpenAddWool: (value) => set({ openAddWool: value }),
  openAddLeather: false,
  setOpenAddLeather: (value) => set({ openAddLeather: value }),
}));
