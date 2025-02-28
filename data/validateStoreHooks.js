import { validateStore } from "./validateStore";

export const validateStoreHooks = () => {
  const checkBoxWarnings = validateStore((state) => state.checkBoxWarnings);
  const setWarnings = validateStore((state) => state.setWarnings);
  const modelWarningCoat = validateStore((state) => state.modelWarningCoat);

  return {
    checkBoxWarnings,
    setWarnings,
    modelWarningCoat,
  };
};
