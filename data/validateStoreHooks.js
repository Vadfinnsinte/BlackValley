import { validateStore } from "./validateStore";

export const validateStoreHooks = () => {
  const checkBoxWarnings = validateStore((state) => state.checkBoxWarnings);
  const setWarnings = validateStore((state) => state.setWarnings);
  const modelWarningCoat = validateStore((state) => state.modelWarningCoat);
  const measureWarning = validateStore((state) => state.measureWarning);
  const woolWarning = validateStore((state) => state.woolWarning);

  return {
    checkBoxWarnings,
    setWarnings,
    modelWarningCoat,
    measureWarning,
    woolWarning,
  };
};
