import { create } from "zustand";

export const validateStore = create((set) => ({
  checkBoxWarnings: {
    bool: false,
    message: "*Please check one of the boxes",
  },
  modelWarningCoat: {
    bool: false,
    message: "*Måste välja en modell.",
  },

  setWarnings: {
    setCheckbox: (value) =>
      set((state) => ({
        checkBoxWarnings: { ...state.checkBoxWarnings, bool: value },
      })),
    setModelWarningCoat: (value) =>
      set((state) => ({
        modelWarningCoat: { ...state.modelWarningCoat, bool: value },
      })),
  },
}));
