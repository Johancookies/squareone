import { FC } from "react";

// mui
import { Box, CircularProgress } from "@mui/material";

interface ILoader {
  padding?: number;
}

export const Loader: FC<ILoader> = ({ padding = 10 }) => {
  return (
    <Box
      p={padding}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "100%" }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};
