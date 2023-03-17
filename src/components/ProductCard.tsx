import { FC } from "react";

// routing
import { Link } from "wouter";

// mui
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// intefaces
import { IProduct } from "../types/types";

// hooks
import { useCart } from "../hooks/useCart";

interface IProductCard {
  product: IProduct;
}

export const ProductCard: FC<IProductCard> = ({ product }) => {
  const { handleAddProduct } = useCart();

  return (
    <Card variant={"outlined"}>
      <CardMedia
        component="img"
        alt={product.title}
        height={200}
        image={product.thumbnail}
      />
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            width: "100%",
          }}
          noWrap
          gutterBottom
          variant="h5"
          component="span"
        >
          {product.title}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            height: 60,
          }}
          variant="body2"
          color="text.secondary"
        >
          {product.description}
        </Typography>
        <Box display={"flex"} alignItems={"end"} gap={"2px"}>
          <Typography variant="h2" color="text.secondary" component="span">
            ${product.price}
          </Typography>
          <Typography
            sx={{ marginBottom: "10px" }}
            variant="caption"
            color="text.secondary"
            component="span"
          >
            USD
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "inline-block", width: "100%" }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Button
            variant={"contained"}
            fullWidth
            onClick={() => handleAddProduct(product)}
          >
            {"ADD"} {product.discountPercentage}% OFF!
          </Button>
          <Link href={`/${product.id}`}>
            <Button variant={"contained"} fullWidth>
              {"CHECK DETAILS"}
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
};
