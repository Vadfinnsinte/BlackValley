import { formValuesStore } from "./formValueStore";

const formStore = () => {
  // coat
  const setCoat = formValuesStore((state) => state.setCoat);
  const coat = formValuesStore((state) => state.coat);
  const setCoatForm = formValuesStore((state) => state.setCoatForm);
  const coatForm = formValuesStore((state) => state.coatForm);
  const selectedModelCoat = formValuesStore((state) => state.selectedModelCoat);
  const setSelectedModelCoat = formValuesStore(
    (state) => state.setSelectedModelCoat
  );
  const selectedColor = formValuesStore((state) => state.selectedColor);
  const setSelectedColor = formValuesStore((state) => state.setSelectedColor);
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
  const measurementsCoat = formValuesStore((state) => state.measurementsCoat);
  const setMeasurementsCoat = formValuesStore(
    (state) => state.setMeasurementsCoat
  );
  const cosyCollarColor = formValuesStore((state) => state.cosyCollarColor);
  const setCosyCollarColor = formValuesStore(
    (state) => state.setCosyCollarColor
  );
  const brodyrColor = formValuesStore((state) => state.brodyrColor);
  const setBrodyrColor = formValuesStore((state) => state.setBrodyrColor);
  const brodyrText = formValuesStore((state) => state.brodyrText);
  const setBrodyrText = formValuesStore((state) => state.setBrodyrText);
  const commentsCoat = formValuesStore((state) => state.commentsCoat);
  const setCommentsCoat = formValuesStore((state) => state.setCommentsCoat);

  //collar
  const collar = formValuesStore((state) => state.collar);
  const setCollar = formValuesStore((state) => state.setCollar);
  const collarForm = formValuesStore((state) => state.collarForm);
  const setCollarForm = formValuesStore((state) => state.setCollarForm);
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
  const openMetal = formValuesStore((state) => state.openMetal);
  const setOpenMetal = formValuesStore((state) => state.setOpenMetal);

  //other
  const other = formValuesStore((state) => state.other);
  const setOther = formValuesStore((state) => state.setOther);
  const otherForm = formValuesStore((state) => state.otherForm);
  const setOtherForm = formValuesStore((state) => state.setOtherForm);

  //warningmessage
  const warning = formValuesStore((state) => state.warning);
  const setWarning = formValuesStore((state) => state.setWarning);
  const setWarningMessage = formValuesStore((state) => state.setWarningMessage);
  const warningMessage = formValuesStore((state) => state.warningMessage);

  // steps
  const stepOne = formValuesStore((state) => state.stepOne);
  const setStepOne = formValuesStore((state) => state.setStepOne);
  const stepTwo = formValuesStore((state) => state.stepTwo);
  const setStepTwo = formValuesStore((state) => state.setStepTwo);
  const stepThree = formValuesStore((state) => state.stepThree);
  const setStepThree = formValuesStore((state) => state.setStepThree);
  const stepFour = formValuesStore((state) => state.stepFour);
  const setStepFour = formValuesStore((state) => state.setStepFour);

  //Saving which form you are on
  const comingFromForm = formValuesStore((state) => state.comingFromForm);
  const setComingFromForm = formValuesStore((state) => state.setComingFromForm);

  //States that we are using in both
  const selectedFont = formValuesStore((state) => state.selectedFont);
  const setSelectedFont = formValuesStore((state) => state.setSelectedFont);
  const openFont = formValuesStore((state) => state.openFont);
  const setOpenFont = formValuesStore((state) => state.setOpenFont);

  // const selectedFont = formValuesStore((state) => state.selectedFont);
  // const setSelectedFont = formValuesStore((state) => state.selectedFont);
  // const woolColors = formValuesStore((state) => state.woolColors);
  // const setWoolColors = formValuesStore((state) => state.setWoolColors);

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
    measurementsCoat,
    setMeasurementsCoat,
    cosyCollarColor,
    setCosyCollarColor,
    brodyrColor,
    setBrodyrColor,
    commentsCoat,
    setCommentsCoat,
    brodyrText,
    setBrodyrText,
    setStepFour,
    stepFour,
  };
};

export { formStore };
