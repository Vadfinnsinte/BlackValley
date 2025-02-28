import { create } from "zustand";
import { fontItems } from "../constants/fonts";

const formValuesStore = create((set) => ({
  chosenProduct: {
    coat: false,
    collar: false,
    other: false,
  },
  setChosenProduct: {
    setCoat: (value) =>
      set((state) => ({
        chosenProduct: { ...state.chosenProduct, coat: value },
      })),
    setCollar: (value) =>
      set((state) => ({
        chosenProduct: { ...state.chosenProduct, collar: value },
      })),
    setOther: (value) =>
      set((state) => ({
        chosenProduct: { ...state.chosenProduct, other: value },
      })),
    setAllChosenProducts: () =>
      set(() => ({
        chosenProduct: { coat: false, collar: false, other: false },
      })),
  },

  chosenForm: {
    coatForm: false,
    collarForm: false,
    otherForm: false,
  },
  setChosenForm: {
    setCoatForm: (value) =>
      set((state) => ({
        chosenForm: { ...state.chosenForm, coatForm: value },
      })),
    setCollarForm: (value) =>
      set((state) => ({
        chosenForm: { ...state.chosenForm, collarForm: value },
      })),
    setOtherForm: (value) =>
      set((state) => ({
        chosenForm: { ...state.chosenForm, otherForm: value },
      })),
    setAllChosen: () =>
      set(() => ({
        chosenForm: { coatForm: false, collarForm: false, otherForm: false },
      })),
  },

  // Coat

  openCoatModel: null,
  setOpenCoatModel: (value) => set({ openCoatModel: value }),
  openColor: null,
  setOpenColor: (value) => set({ openColor: value }),

  //collar

  selectedCollarVariables: {
    selectedModalCollar: null,
    selectedWidth: "",
    selectedLeather: "",
    selectedMetal: "",
    selectedFont: "",
    lengthCollar: "",
    brodyrColor: "",
    brodyrText: "",
    chosenFont: fontItems,
    commentsCollar: "",
  },
  setSelectedCollarVariables: {
    setSelectedModalCollar: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          selectedModalCollar: value,
        },
      })),
    setSelectedWidth: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          selectedWidth: value,
        },
      })),
    setSelectedLeather: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          selectedLeather: value,
        },
      })),
    setSelectedMetal: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          selectedMetal: value,
        },
      })),
    setSelectedFont: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          selectedFont: value,
        },
      })),
    setLengthCollar: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          lengthCollar: value,
        },
      })),
    setBrodyrColor: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          brodyrColor: value,
        },
      })),
    setBrodyrText: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          brodyrText: value,
        },
      })),
    setChosenFont: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          chosenFont: value,
        },
      })),
    setCommentsCollar: (value) =>
      set((state) => ({
        selectedCollarVariables: {
          ...state.selectedCollarVariables,
          commentsCollar: value,
        },
      })),
    setAllValuesCollar: () =>
      set(() => ({
        selectedCollarVariables: {
          selectedModalCollar: null,
          selectedWidth: "",
          selectedLeather: "",
          selectedMetal: "",
          selectedFont: "",
          lengthCollar: "",
          brodyrColor: "",
          brodyrText: "",
          chosenFont: fontItems,
          commentsCollar: "",
        },
      })),
  },

  collarModelOpen: false,
  setCollarModelOpen: (value) => set({ collarModelOpen: value }),
  openWidth: false,
  setOpenWidth: (value) => set({ openWidth: value }),
  openLeather: false,
  setOpenLeather: (value) => set({ openLeather: value }),
  openMetal: false,
  setOpenMetal: (value) => set({ openMetal: value }),

  //warningmessage
  warning: false,
  setWarning: (value) => set({ warning: value }),
  warningMessage: "",
  setWarningMessage: (value) => set({ warningMessage: value }),

  //steps
  chosenStep: {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  },
  setChosenStep: {
    setStepOne: (value) =>
      set((state) => ({
        chosenStep: { ...state.chosenStep, stepOne: value },
      })),
    setStepTwo: (value) =>
      set((state) => ({
        chosenStep: { ...state.chosenStep, stepTwo: value },
      })),
    setStepThree: (value) =>
      set((state) => ({
        chosenStep: { ...state.chosenStep, stepThree: value },
      })),
    setStepFour: (value) =>
      set((state) => ({
        chosenStep: { ...state.chosenStep, stepFour: value },
      })),
  },
  // Coat variables.
  selectedCoatVariables: {
    selectedModelCoat: null,
    selectedColor: null,
    colorColar: false,
    chosenFont: fontItems,
    selectedFont: "",
    legString: null,
    measurementsCoat: "",
    cosyCollarColor: "",
    brodyrColor: "",
    brodyrText: "",
    commentsCoat: "",
  },
  setSelectedCoatVariables: {
    setSelectedModelCoat: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          selectedModelCoat: value,
        },
      })),
    setSelectedColor: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          selectedColor: value,
        },
      })),
    setChosenFont: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          chosenFont: value,
        },
      })),
    setLegString: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          legString: value,
        },
      })),
    setMeasurementsCoat: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          measurementsCoat: value,
        },
      })),
    setCosyCollarColor: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          cosyCollarColor: value,
        },
      })),
    setBrodyrColor: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          brodyrColor: value,
        },
      })),
    setBrodyrText: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          brodyrText: value,
        },
      })),
    setCommentsCoat: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          commentsCoat: value,
        },
      })),
    setColorColar: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          colorColar: value,
        },
      })),
    setSelectedFont: (value) =>
      set((state) => ({
        selectedCoatVariables: {
          ...state.selectedCoatVariables,
          selectedFont: value,
        },
      })),
    setAllValuesCoat: () =>
      set(() => ({
        selectedCoatVariables: {
          selectedModelCoat: null,
          selectedColor: null,
          colorColar: false,
          chosenFont: fontItems,
          selectedFont: "",
          legString: null,
          measurementsCoat: "",
          cosyCollarColor: "",
          brodyrColor: "",
          brodyrText: "",
          commentsCoat: "",
        },
      })),
  },

  //States that we are using in both
  openFont: false,
  setOpenFont: (value) => set({ openFont: value }),

  //Saving which form you are on
  comingFromForm: "",
  setComingFromForm: (value) => set({ comingFromForm: value }),

  specialOrder: "",
  setSpecialOrder: (value) => set({ specialOrder: value }),
  orderMessage: { messageCoat: [], messageCollar: [], messageOther: [] },
  setOrderMessage: {
    setMessageCoat: (value) =>
      set((state) => ({
        orderMessage: { ...state.orderMessage, messageCoat: value },
      })),
    setMessageCollar: (value) =>
      set((state) => ({
        orderMessage: { ...state.orderMessage, messageCollar: value },
      })),
    setMessageOther: (value) =>
      set((state) => ({
        orderMessage: { ...state.orderMessage, messageOther: value },
      })),
  },
  userInformation: {
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    street: "",
    postalCode: "",
  },
  setUserInformation: {
    setName: (value) =>
      set((state) => ({
        userInformation: { ...state.userInformation, name: value },
      })),
    setSurname: (value) =>
      set((state) => ({
        userInformation: { ...state.userInformation, surname: value },
      })),
    setPhoneNumber: (value) =>
      set((state) => ({
        userInformation: { ...state.userInformation, phoneNumber: value },
      })),
    setEmail: (value) =>
      set((state) => ({
        userInformation: { ...state.userInformation, email: value },
      })),
    setStreet: (value) =>
      set((state) => ({
        userInformation: { ...state.userInformation, street: value },
      })),
    setPostalCode: (value) =>
      set((state) => ({
        userInformation: { ...state.userInformation, postalCode: value },
      })),
    setResetAll: () =>
      set(() => ({
        userInformation: {
          name: "",
          surname: "",
          phoneNumber: "",
          email: "",
          street: "",
          postalCode: "",
        },
      })),
  },
}));

export { formValuesStore };
