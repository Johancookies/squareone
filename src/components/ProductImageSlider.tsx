import { FC } from "react";

// mui
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// interfaces
import { IProduct } from "../types/types";

interface IProductImageSlider {
  product: IProduct | null;
}

export const ProductImageSlider: FC<IProductImageSlider> = ({ product }) => {
  const matches: boolean = useMediaQuery("(min-width:600px)");

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {product?.images.map((image) => (
        <SwiperSlide key={`image-${image}`}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            sx={{ height: matches ? 700 : 340 }}
          >
            <img
              style={{
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                objectFit: "cover",
                aspectRatio: 1,
              }}
              src={image}
              alt={product.title}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
