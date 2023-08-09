import React from "react";
import { KeyboardCommandKey } from "@mui/icons-material";
import { Box, CssBaseline } from "@mui/material";

const Preloader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <CssBaseline />
      <KeyboardCommandKey
        className="animate__animated animate__tada"
        sx={{ fontSize: "70px" }}
      />
    </Box>
  );
};

export default Preloader;
