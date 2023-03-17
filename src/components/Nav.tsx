import { useState } from "react";

// mui
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

// components
import { AuthButton } from "./AuthButton";
import { Cart } from "./Cart";
import { CartDrawer } from "./CartDrawer";

// hooks
import { useWebToken } from "../hooks/useWebToken";

// icons
import ViewInArIcon from "@mui/icons-material/ViewInAr";

// notistick
import { useSnackbar } from "notistack";
import { errorToast } from "../utils/utils";

export const Nav = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { handleGetAuthStatus } = useWebToken();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleCloseDrawer = (): void => {
    setOpenDrawer(false);
  };

  const handleOpenDrawer = (): void => {
    const isAuthenticated = handleGetAuthStatus();
    if (!isAuthenticated) {
      enqueueSnackbar("User must be authenticated", errorToast);
      return;
    }
    setOpenDrawer(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box display={"flex"} alignItems={"center"} sx={{ flexGrow: 1 }}>
            <ViewInArIcon />
            <Typography sx={{ marginLeft: 1 }} variant="h6">
              squeareone
            </Typography>
          </Box>
          <AuthButton />
          <Box ml={2}>
            <Cart handleOpenDrawer={handleOpenDrawer} />
          </Box>
        </Toolbar>
      </AppBar>
      <CartDrawer isOpen={openDrawer} handleClose={handleCloseDrawer} />
    </Box>
  );
};
