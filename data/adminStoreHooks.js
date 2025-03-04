import { adminStore } from "./adminStore";

export const adminHooks = () => {
  const loginModalOpen = adminStore((state) => state.loginModalOpen);
  const setLoginModalOpen = adminStore((state) => state.setLoginModalOpen);
  const userId = adminStore((state) => state.userId);
  const setUserId = adminStore((state) => state.setUserId);
  return { loginModalOpen, setLoginModalOpen, userId, setUserId };
};
