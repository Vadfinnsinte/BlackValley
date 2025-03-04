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
  legStringWarning: {
    bool: false,
    message: "*Välj en",
  },
  nameWarning: {
    bool: false,
    message: "*obligatorisk",
  },
  surnameWarning: {
    bool: false,
    message: "*Fyll i efternamn",
  },
  phoneWarning: {
    bool: false,
    message: "*Fyll i telefonnummer",
  },
  emailWarning: {
    bool: false,
    message: "*Fyll i mail",
  },
  streetWarning: {
    bool: false,
    message: "*Fyll i gata",
  },
  postalWarning: {
    bool: false,
    message: "*Fyll i postnummer",
  },
  collarModelWarning: {
    bool: false,
    message: "*Välj model",
  },
  widthWarning: {
    bool: false,
    message: "*Välj bredd",
  },
  leatherWarning: {
    bool: false,
    message: "*Välj färg",
  },
  ringWarning: {
    bool: false,
    message: "*Välj metal",
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
    setLegStringWarning: (value) =>
      set((state) => ({
        legStringWarning: { ...state.legStringWarning, bool: value },
      })),
    setNameWarning: (value) =>
      set((state) => ({
        nameWarning: { ...state.nameWarning, bool: value },
      })),
    setSurNameWarning: (value) =>
      set((state) => ({
        surnameWarning: { ...state.surnameWarning, bool: value },
      })),
    setPhoneWarning: (value) =>
      set((state) => ({
        phoneWarning: { ...state.phoneWarning, bool: value },
      })),
    setPhoneWarningMessage: (value) =>
      set((state) => ({
        phoneWarning: { ...state.phoneWarning, message: value },
      })),
    setEmailWarning: (value) =>
      set((state) => ({
        emailWarning: { ...state.emailWarning, bool: value },
      })),
    setEmailWarningMessage: (value) =>
      set((state) => ({
        emailWarning: { ...state.emailWarning, message: value },
      })),
    setStreetWarning: (value) =>
      set((state) => ({
        streetWarning: { ...state.streetWarning, bool: value },
      })),
    setPostalWarning: (value) =>
      set((state) => ({
        postalWarning: { ...state.postalWarning, bool: value },
      })),
    setPostalWarningMessage: (value) =>
      set((state) => ({
        postalWarning: { ...state.postalWarning, message: value },
      })),
    setCollarModelWarning: (value) =>
      set((state) => ({
        collarModelWarning: { ...state.collarModelWarning, bool: value },
      })),
    setWidthWarning: (value) =>
      set((state) => ({
        widthWarning: { ...state.widthWarning, bool: value },
      })),
    setLeatherWarning: (value) =>
      set((state) => ({
        leatherWarning: { ...state.leatherWarning, bool: value },
      })),
    setRingWarning: (value) =>
      set((state) => ({
        ringWarning: { ...state.ringWarning, bool: value },
      })),
  },
}));
