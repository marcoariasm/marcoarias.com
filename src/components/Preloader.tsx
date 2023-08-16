import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { KeyboardCommandKey } from "@mui/icons-material";

const Preloader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", bgColor: "inherit", color: "inherit" }}
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
