import { FC, useState, useLayoutEffect } from "react";

// mui
import { Button } from "@mui/material";

// hooks
import { useWebToken } from "../hooks/useWebToken";

export const AuthButton: FC = () => {
  const { handleLogIn, handleLogOut, handleGetAuthStatus } = useWebToken();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleSession = (): void => {
    if (!isAuthenticated) {
      setIsAuthenticated(true);
      handleLogIn();
      return;
    }
    setIsAuthenticated(false);
    handleLogOut();
  };

  useLayoutEffect(() => {
    const status: string | null = handleGetAuthStatus();
    if (status) {
      setIsAuthenticated(true);
      return;
    }
    setIsAuthenticated(false);
  }, []);

  return (
    <Button variant="contained" color="secondary" onClick={handleSession}>
      {isAuthenticated ? "LOGOUT" : "LOGIN"}
    </Button>
  );
};
