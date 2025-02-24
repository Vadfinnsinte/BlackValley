import { create } from "zustand";
import { fontItems } from "../constants/fonts";

const formValuesStore = create((set) => ({
  // Coat
  coat: false,
  setCoat: (value) => set({ coat: value }),
  coatForm: false,
  setCoatForm: (value) => set({ coatForm: value }),
  selectedModelCoat: null,
  setSelectedModelCoat: (value) => set({ selectedModelCoat: value }),
  selectedColor: null,
  setSelectedColor: (value) => set({ selectedColor: value }),
  openCoatModel: null,
  setOpenCoatModel: (value) => set({ openCoatModel: value }),
  openColor: null,
  setOpenColor: (value) => set({ openColor: value }),
  colorColar: null,
  setColorColar: (value) => set({ colorColar: value }),
  chosenFont: fontItems,
  setChosenFont: (value) => set({ chosenFont: value }),
  legString: null,
  setLegString: (value) => set({ legString: value }),
  measurementsCoat: "",
  setMeasurementsCoat: (value) => set({ measurementsCoat: value }),
  cosyCollarColor: "",
  setCosyCollarColor: (value) => set({ cosyCollarColor: value }),
  brodyrColor: "",
  setBrodyrColor: (value) => set({ brodyrColor: value }),
  brodyrText: "",
  setBrodyrText: (value) => set({ brodyrText: value }),
  commentsCoat: "",
  setCommentsCoat: (value) => set({ commentsCoat: value }),

  //collar
  collar: false,
  setCollar: (value) => set({ collar: value }),
  collarForm: false,
  setCollarForm: (value) => set({ collarForm: value }),
  selectedModalCollar: null,
  setSelectedModalCollar: (value) => set({ selectedModalCollar: value }),
  selectedWidth: "",
  setSelectedWidth: (value) => set({ selectedWidth: value }),
  selectedLeather: "",
  setSelectedLeather: (value) => set({ selectedLeather: value }),
  selectedMetal: "",
  setSelectedMetal: (value) => set({ selectedMetal: value }),
  collarModelOpen: false,
  setCollarModelOpen: (value) => set({ collarModelOpen: value }),
  openWidth: false,
  setOpenWidth: (value) => set({ openWidth: value }),
  openLeather: false,
  setOpenLeather: (value) => set({ openLeather: value }),
  openMetal: false,
  setOpenMetal: (value) => set({ openMetal: value }),

  //other
  other: false,
  setOther: (value) => set({ other: value }),
  otherForm: false,
  setOtherForm: (value) => set({ otherForm: value }),

  //warningmessage
  warning: false,
  setWarning: (value) => set({ warning: value }),
  warningMessage: "",
  setWarningMessage: (value) => set({ warningMessage: value }),

  //steps
  stepOne: true,
  setStepOne: (value) => set({ stepOne: value }),
  stepTwo: false,
  setStepTwo: (value) => set({ stepTwo: value }),
  stepThree: false,
  setStepThree: (value) => set({ stepThree: value }),
  stepFour: false,
  setStepFour: (value) => set({ stepFour: value }),

  //States that we are using in both
  selectedFont: "",
  setSelectedFont: (value) => set({ selectedFont: value }),
  openFont: false,
  setOpenFont: (value) => set({ openFont: value }),

  //Saving which form you are on
  comingFromForm: "",
  setComingFromForm: (value) => set({ comingFromForm: value }),
  lengthCollar: "",
  setLengthCollar: (value) => set({ lengthCollar: value }),
}));

export { formValuesStore };
