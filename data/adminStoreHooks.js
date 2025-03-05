import { adminStore } from "./adminStore";

export const adminHooks = () => {
  const loginModalOpen = adminStore((state) => state.loginModalOpen);
  const setLoginModalOpen = adminStore((state) => state.setLoginModalOpen);
  const userId = adminStore((state) => state.userId);
  const setUserId = adminStore((state) => state.setUserId);
  const openAddWool = adminStore((state) => state.openAddWool);
  const setOpenAddWool = adminStore((state) => state.setOpenAddWool);
  const openAddLeather = adminStore((state) => state.openAddLeather);
  const setOpenAddLeather = adminStore((state) => state.setOpenAddLeather);
  return {
    loginModalOpen,
    setLoginModalOpen,
    userId,
    setUserId,
    openAddWool,
    setOpenAddWool,
    openAddLeather,
    setOpenAddLeather,
  };
};
