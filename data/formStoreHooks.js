import { formValuesStore } from "./formValueStore";

const formStore = () => {
  // coat
  const openCoatModel = formValuesStore((state) => state.openCoatModel);
  const setOpenCoatModel = formValuesStore((state) => state.setOpenCoatModel);
  const openColor = formValuesStore((state) => state.openColor);
  const setOpenColor = formValuesStore((state) => state.setOpenColor);

  //collar
  const selectedCollarVariables = formValuesStore(
    (state) => state.selectedCollarVariables
  );
  const setSelectedCollarVariables = formValuesStore(
    (state) => state.setSelectedCollarVariables
  );
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
  const specialOrder = formValuesStore((state) => state.specialOrder);
  const setSpecialOrder = formValuesStore((state) => state.setSpecialOrder);

  //warningmessage
  const warning = formValuesStore((state) => state.warning);
  const setWarning = formValuesStore((state) => state.setWarning);
  const setWarningMessage = formValuesStore((state) => state.setWarningMessage);
  const warningMessage = formValuesStore((state) => state.warningMessage);

  // steps
  const chosenStep = formValuesStore((state) => state.chosenStep);
  const setChosenStep = formValuesStore((state) => state.setChosenStep);

  //Saving which form you are on
  const comingFromForm = formValuesStore((state) => state.comingFromForm);
  const setComingFromForm = formValuesStore((state) => state.setComingFromForm);

  //States that we are using in both
  const openFont = formValuesStore((state) => state.openFont);
  const setOpenFont = formValuesStore((state) => state.setOpenFont);

  // Contact info
  const userInformation = formValuesStore((state) => state.userInformation);
  const setUserInformation = formValuesStore(
    (state) => state.setUserInformation
  );
  const chosenProduct = formValuesStore((state) => state.chosenProduct);
  const setChosenProduct = formValuesStore((state) => state.setChosenProduct);
  const chosenForm = formValuesStore((state) => state.chosenForm);
  const setChosenForm = formValuesStore((state) => state.setChosenForm);
  const selectedCoatVariables = formValuesStore(
    (state) => state.selectedCoatVariables
  );
  const setSelectedCoatVariables = formValuesStore(
    (state) => state.setSelectedCoatVariables
  );

  return {
    setUserInformation,
    userInformation,
    chosenProduct,
    setChosenProduct,
    chosenForm,
    setChosenForm,
    setChosenStep,
    chosenStep,
    selectedCoatVariables,
    setSelectedCoatVariables,
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
    setWarningMessage,
    warningMessage,
    setWarning,
    warning,
    selectedCollarVariables,
    setSelectedCollarVariables,
    openCoatModel,
    setOpenCoatModel,
    openColor,
    setOpenColor,
    comingFromForm,
    setComingFromForm,

    specialOrder,
    setSpecialOrder,
  };
};

export { formStore };
