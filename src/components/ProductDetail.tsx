import { FC } from "react";

// routing
import { Link, useRoute } from "wouter";

// mui
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

// hooks
import { useProductById } from "../hooks/useProductById";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// components
import { Loader } from "./Loader";
import { ProductImageSlider } from "./ProductImageSlider";
import { ProductInformation } from "./ProductInformation";

export const ProductDetail: FC = () => {
  const [match, params] = useRoute("/:id");
  const { product, isLoading, error } = useProductById(params?.id);

  return (
    <Box pt={10}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Link href="/">
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <IconButton>
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant={"body1"}>go back</Typography>
              </Box>
            </Link>
          </Grid>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Grid item xs={12} md={7}>
                <ProductImageSlider product={product} />
              </Grid>
              <Grid item xs={12} md={5}>
                <ProductInformation product={product} />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
