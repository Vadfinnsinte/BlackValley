import { formValuesStore } from "./formValueStore";

const formStore = () => {
  const setCoat = formValuesStore((state) => state.setCoat);
  const coat = formValuesStore((state) => state.coat);
  const collar = formValuesStore((state) => state.collar);
  const setCollar = formValuesStore((state) => state.setCollar);
  const other = formValuesStore((state) => state.other);
  const setOther = formValuesStore((state) => state.setOther);
  const setCoatForm = formValuesStore((state) => state.setCoatForm);
  const coatForm = formValuesStore((state) => state.coatForm);
  const collarForm = formValuesStore((state) => state.collarForm);
  const setCollarForm = formValuesStore((state) => state.setCollarForm);
  const otherForm = formValuesStore((state) => state.otherForm);
  const setOtherForm = formValuesStore((state) => state.setOtherForm);

  const warning = formValuesStore((state) => state.warning);
  const setWarning = formValuesStore((state) => state.setWarning);
  const setWarningMessage = formValuesStore((state) => state.setWarningMessage);
  const warningMessage = formValuesStore((state) => state.warningMessage);

  const stepOne = formValuesStore((state) => state.stepOne);
  const setStepOne = formValuesStore((state) => state.setStepOne);
  const stepTwo = formValuesStore((state) => state.stepTwo);
  const setStepTwo = formValuesStore((state) => state.setStepTwo);
  const stepThree = formValuesStore((state) => state.stepThree);
  const setStepThree = formValuesStore((state) => state.setStepThree);
  const selectedModalCollar = formValuesStore(
    (state) => state.selectedModalCollar
  );
  const setSelectedModalCollar = formValuesStore(
    (state) => state.setSelectedModalCollar
  );
  const selectedWidth = formValuesStore((state) => state.selectedWidth);
  const setSelectedWidth = formValuesStore((state) => state.setSelectedWidth);
  const selectedLeather = formValuesStore((state) => state.selectedLeather);
  const setSelectedLeather = formValuesStore(
    (state) => state.setSelectedLeather
  );
  const selectedFont = formValuesStore((state) => state.selectedFont);
  const setSelectedFont = formValuesStore((state) => state.setSelectedFont);
  const selectedMetal = formValuesStore((state) => state.selectedMetal);
  const setSelectedMetal = formValuesStore((state) => state.setSelectedMetal);
  const collarModelOpen = formValuesStore((state) => state.collarModelOpen);
  const setCollarModelOpen = formValuesStore(
    (state) => state.setCollarModelOpen
  );
  const openWidth = formValuesStore((state) => state.openWidth);
  const setOpenWidth = formValuesStore((state) => state.setOpenWidth);
  const openLeather = formValuesStore((state) => state.openLeather);
  const setOpenLeather = formValuesStore((state) => state.setOpenLeather);
  const openFont = formValuesStore((state) => state.openFont);
  const setOpenFont = formValuesStore((state) => state.setOpenFont);
  const openMetal = formValuesStore((state) => state.openMetal);
  const setOpenMetal = formValuesStore((state) => state.setOpenMetal);
  const selectedModelCoat = formValuesStore((state) => state.selectedModelCoat);
  const setSelectedModelCoat = formValuesStore(
    (state) => state.setSelectedModelCoat
  );
  const selectedColor = formValuesStore((state) => state.selectedColor);
  const setSelectedColor = formValuesStore((state) => state.setSelectedColor);
  // const selectedFont = formValuesStore((state) => state.selectedFont);
  // const setSelectedFont = formValuesStore((state) => state.selectedFont);
  const openCoatModel = formValuesStore((state) => state.openCoatModel);
  const setOpenCoatModel = formValuesStore((state) => state.setOpenCoatModel);
  const openColor = formValuesStore((state) => state.openColor);
  const setOpenColor = formValuesStore((state) => state.setOpenColor);
  const colorColar = formValuesStore((state) => state.colorColar);
  const setColorColar = formValuesStore((state) => state.setColorColar);
  const chosenFont = formValuesStore((state) => state.chosenFont);
  const setChosenFont = formValuesStore((state) => state.setChosenFonts);
  const legString = formValuesStore((state) => state.legString);
  const setLegString = formValuesStore((state) => state.setLegString);
  // const woolColors = formValuesStore((state) => state.woolColors);
  // const setWoolColors = formValuesStore((state) => state.setWoolColors);
  const comingFromForm = formValuesStore((state) => state.comingFromForm);
  const setComingFromForm = formValuesStore((state) => state.setComingFromForm);
  return {
    setCoat,
    coat,
    collar,
    setCollar,
    other,
    setOther,
    coat,
    coatForm,
    setCoatForm,
    otherForm,
    setOtherForm,
    collarForm,
    setCollarForm,
    setOpenMetal,
    openMetal,
    openFont,
    setOpenLeather,
    openLeather,
    setOpenFont,
    openWidth,
    setOpenWidth,
    collarModelOpen,
    setCollarModelOpen,
    setSelectedMetal,
    selectedMetal,
    selectedFont,
    setSelectedFont,
    setSelectedLeather,
    selectedLeather,
    selectedModalCollar,
    setStepThree,
    setSelectedWidth,
    selectedWidth,
    setSelectedModalCollar,
    stepThree,
    setStepTwo,
    stepTwo,
    setStepOne,
    stepOne,
    setWarningMessage,
    warningMessage,
    setWarning,
    warning,
    selectedModelCoat,
    setSelectedModelCoat,
    setSelectedColor,
    selectedColor,
    openCoatModel,
    setOpenCoatModel,
    openColor,
    setOpenColor,
    colorColar,
    setColorColar,
    chosenFont,
    setChosenFont,
    legString,
    setLegString,
    comingFromForm,
    setComingFromForm,
  };
};

export { formStore };
