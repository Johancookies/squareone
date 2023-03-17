import { FC } from "react";

// mui
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

// interfaces
import { IProduct } from "../types/types";

// icons
import GradeIcon from "@mui/icons-material/Grade";

// hooks
import { useCart } from "../hooks/useCart";

interface IProductInformation {
  product: IProduct | null;
}

export const ProductInformation: FC<IProductInformation> = ({ product }) => {
  const { handleAddProduct } = useCart();

  return (
    <Stack>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant={"overline"}
          component={"span"}
          color="text.secondary"
        >
          {product?.category}
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={"6px"}>
          <Typography
            variant={"body2"}
            component={"span"}
            color="text.secondary"
          >
            <b>{product?.rating} / 5.0</b>
          </Typography>
          <GradeIcon fontSize="small" />
        </Box>
      </Box>
      <Typography variant={"caption"} component={"span"}>
        <b>{product?.brand}</b>
      </Typography>
      <Typography variant={"h4"} component={"span"}>
        {product?.title}
      </Typography>
      <Box mb={6} mt={1}>
        <Typography variant={"subtitle2"} component={"span"}>
          {product?.description}
        </Typography>
      </Box>
      <Paper variant="outlined" sx={{ padding: "8px 16px", marginBottom: 3 }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"end"}>
            <Typography variant={"h5"} component={"b"} sx={{ marginRight: 1 }}>
              ${product?.price} USD
            </Typography>
            <Typography
              variant={"caption"}
              component={"b"}
              sx={{ marginBottom: "2px" }}
            >
              ${product?.discountPercentage}% OFF
            </Typography>
          </Box>
          <Typography variant={"caption"} component={"b"}>
            {product?.stock} in stock
          </Typography>
        </Box>
      </Paper>
      <Button
        sx={{ marginBottom: 4 }}
        variant={"contained"}
        onClick={() => handleAddProduct(product)}
      >
        ADD TO CART
      </Button>
    </Stack>
  );
};
