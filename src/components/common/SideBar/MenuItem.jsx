import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";

const menuItemStyles = {
  listItem: {
    "& a": {
      textDecoration: "none",
      color: "#fafafa",
    },
  },
};

function MenuItem({ icon, children, href = "#" }) {
  return (
    <Box
      sx={menuItemStyles.listItem}

      component="li"
      display="flex"
      alignItems="center"
      gap={3}
      my={2}
    >
      <Box>{icon}</Box>
      <NavLink
        className={(active) => (active.isActive ? "active" : "")}
        to={href}
      >
        {" "}
        {children}
      </NavLink>
    </Box>
  );
}

export default MenuItem;
