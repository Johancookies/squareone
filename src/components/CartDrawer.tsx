import { FC } from "react";

// mui
import {
  Stack,
  Paper,
  Box,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";

// icons
import DeleteIcon from "@mui/icons-material/Delete";

// hooks
import { useCart } from "../hooks/useCart";

interface ICartDrawer {
  isOpen: boolean;
  handleClose: () => void;
}

export const CartDrawer: FC<ICartDrawer> = ({ isOpen, handleClose }) => {
  const { items, handleRemoveItem } = useCart();

  return (
    <Drawer anchor={"right"} open={isOpen} onClose={handleClose}>
      <Stack spacing={1} p={1}>
        {items && items.length === 0 ? (
          <Paper
            variant="outlined"
            sx={{
              width: 300,
              height: 66,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant={"overline"} component={"span"}>
              {"Cart empty"}
            </Typography>
          </Paper>
        ) : (
          items?.map((product) => (
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                width: 300,
                padding: 1,
              }}
              key={`product-${product.id}`}
            >
              <Avatar
                variant={"square"}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 1,
                  marginRight: 2,
                }}
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={product.thumbnail}
                  alt={product.title}
                />
              </Avatar>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{ width: "100%" }}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography variant={"body2"} component={"span"}>
                    {product?.title}
                  </Typography>
                  <Typography variant={"caption"} component={"span"}>
                    ${product?.price} USD
                  </Typography>
                </Box>
                <IconButton onClick={() => handleRemoveItem(product.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Paper>
          ))
        )}
        {}
      </Stack>
    </Drawer>
  );
};
