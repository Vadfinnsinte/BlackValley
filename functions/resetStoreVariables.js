import { formStore } from "../data/formStoreHooks";

const resetStoreVariables = (
  setChosenForm,
  setChosenProduct,
  setSelectedCollarVariables,
  setSelectedCoatVariables,
  setSpecialOrder
) => {
  setChosenForm.setAllChosen();
  setChosenProduct.setAllChosenProducts();
  setSelectedCollarVariables.setAllValuesCollar();
  setSelectedCoatVariables.setAllValuesCoat();
  setSpecialOrder("");
};
const resetStoreVariablesHard = (
  setChosenForm,
  setChosenProduct,
  setSelectedCollarVariables,
  setSelectedCoatVariables,
  setSpecialOrder,
  setUserInformation,
  setOrderMessage
) => {
  setOrderMessage.setMessageCoat([]);
  setOrderMessage.setMessageCollar([]);
  setOrderMessage.setMessageOther([]);
  setChosenForm.setAllChosen();
  setChosenProduct.setAllChosenProducts();
  setSelectedCollarVariables.setAllValuesCollar();
  setSelectedCoatVariables.setAllValuesCoat();
  setUserInformation.setResetAll();
  setSpecialOrder("");
};

export { resetStoreVariables, resetStoreVariablesHard };
