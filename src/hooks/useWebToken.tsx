import { mockToken } from "../mockToken";

// notistick
import { useSnackbar } from "notistack";

// utils
import { infoToast, successToast } from "../utils/utils";

export const useWebToken = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleLogIn = (): void => {
    const mock = mockToken();
    enqueueSnackbar("User logged in", successToast);
    localStorage.setItem("webtoken", mock);
  };

  const handleLogOut = (): void => {
    enqueueSnackbar("User logged out", infoToast);
    localStorage.removeItem("webtoken");
  };

  const handleGetAuthStatus = (): string | null => {
    return localStorage.getItem("webtoken");
  };

  return { handleLogIn, handleLogOut, handleGetAuthStatus };
};
