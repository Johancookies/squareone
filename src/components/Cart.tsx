import { FC } from "react";

import { useRecoilValue } from "recoil";

import { cartItemsState } from "../state/atoms";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

interface ICart {
  handleOpenDrawer: () => void;
}

export const Cart: FC<ICart> = ({ handleOpenDrawer }) => {
  const items = useRecoilValue<any>(cartItemsState);
  return (
    <IconButton onClick={handleOpenDrawer}>
      <StyledBadge badgeContent={items.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};
