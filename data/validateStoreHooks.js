import { validateStore } from "./validateStore";

export const validateStoreHooks = () => {
  const setWarnings = validateStore((state) => state.setWarnings);
  const checkBoxWarnings = validateStore((state) => state.checkBoxWarnings);
  const modelWarningCoat = validateStore((state) => state.modelWarningCoat);
  const measureWarning = validateStore((state) => state.measureWarning);
  const woolWarning = validateStore((state) => state.woolWarning);
  const legStringWarning = validateStore((state) => state.legStringWarning);
  const nameWarning = validateStore((state) => state.nameWarning);
  const surnameWarning = validateStore((state) => state.surnameWarning);
  const phoneWarning = validateStore((state) => state.phoneWarning);
  const emailWarning = validateStore((state) => state.emailWarning);
  const streetWarning = validateStore((state) => state.streetWarning);
  const postalWarning = validateStore((state) => state.postalWarning);
  const collarModelWarning = validateStore((state) => state.collarModelWarning);
  const widthWarning = validateStore((state) => state.widthWarning);
  const leatherWarning = validateStore((state) => state.leatherWarning);
  const ringWarning = validateStore((state) => state.ringWarning);

  return {
    checkBoxWarnings,
    setWarnings,
    modelWarningCoat,
    measureWarning,
    woolWarning,
    legStringWarning,
    nameWarning,
    surnameWarning,
    phoneWarning,
    emailWarning,
    streetWarning,
    postalWarning,
    collarModelWarning,
    widthWarning,
    leatherWarning,
    ringWarning,
  };
};
