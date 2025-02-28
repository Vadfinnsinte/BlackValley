import { validateStore } from "./validateStore";

export const validateStoreHooks = () => {
  const setWarnings = validateStore((state) => state.setWarnings);
  const checkBoxWarnings = validateStore((state) => state.checkBoxWarnings);
  const modelWarningCoat = validateStore((state) => state.modelWarningCoat);
  const measureWarning = validateStore((state) => state.measureWarning);
  const woolWarning = validateStore((state) => state.woolWarning);
  const legStringWarning = validateStore((state) => state.legStringWarning);

  return {
    checkBoxWarnings,
    setWarnings,
    modelWarningCoat,
    measureWarning,
    woolWarning,
    legStringWarning,
  };
};
