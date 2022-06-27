import React, { useContext } from "react";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import { contextsStore } from "./../../../contexts/index";

function Loader() {
  const { loading } = useContext(contextsStore);
  return (
    <Box
      display={loading ? "flex" : "none"}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      position="fixed"
      backgroundColor="rgba(0,0,0,0.5)"
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}

export default Loader;
