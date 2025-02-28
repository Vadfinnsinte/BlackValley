import { create } from "zustand";

export const validateStore = create((set) => ({
  checkBoxWarnings: {
    bool: false,
    message: "*Please check one of the boxes",
  },
  modelWarningCoat: {
    bool: false,
    message: "*Måste välja en modell",
  },
  measureWarning: {
    bool: false,
    message: "*Vänlig skriv in mått",
  },
  woolWarning: {
    bool: false,
    message: "*Välj en färg",
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
    setMeasureWarning: (value) =>
      set((state) => ({
        measureWarning: { ...state.measureWarning, bool: value },
      })),
    setWoolWarning: (value) =>
      set((state) => ({
        woolWarning: { ...state.woolWarning, bool: value },
      })),
  },
}));
