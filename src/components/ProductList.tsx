import { FC, useState, useMemo } from "react";

// hooks
import { useProducts } from "../hooks/useProducts";

// mui
import { Grid, TextField, Typography } from "@mui/material";

// components
import { ProductCard } from "./ProductCard";
import { Loader } from "./Loader";

// interfaces
import { IProduct } from "../types/types";

export const ProductList: FC = () => {
  const { products, isLoading } = useProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          value={searchTerm}
          placeholder="Search"
          variant={"outlined"}
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filteredProducts && filteredProducts?.length === 0 ? (
            <Grid item xs={12}>
              <Typography
                textAlign={"center"}
                variant="h6"
                color="text.secondary"
              >
                {"PRODUCT NOT FOUND"}
              </Typography>
            </Grid>
          ) : (
            filteredProducts?.map((product: IProduct) => (
              <Grid item xs={12} md={3} sm={6} key={`product-${product.id}`}>
                <ProductCard product={product} />
              </Grid>
            ))
          )}
        </>
      )}
    </Grid>
  );
};
