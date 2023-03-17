import { FC } from "react";

// mui
import { Container, Grid } from "@mui/material";

// components
import { Nav } from "../components/Nav";
import { ProductDetail } from "../components/ProductDetail";

export const ProductDetailPage: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <ProductDetail />
        </Container>
      </Grid>
    </Grid>
  );
};
