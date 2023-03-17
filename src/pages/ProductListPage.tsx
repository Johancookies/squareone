import { FC } from "react";

// mui
import { Container, Grid } from "@mui/material";

// components
import { Nav } from "../components/Nav";
import { ProductList } from "../components/ProductList";

export const ProductListPage: FC = () => {
  return (
    <Grid container spacing={11}>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <ProductList />
        </Container>
      </Grid>
    </Grid>
  );
};
