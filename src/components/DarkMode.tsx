import React from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const DarkMode = ({
  mode,
  setMode,
}: {
  mode: boolean;
  setMode: (mode: boolean) => void;
}) => {
  const onChangeTheme = (newMode: boolean) => {
    setMode(!newMode);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        zIndex: 2,
        pb: 2,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={() => onChangeTheme(mode)}>
        {mode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default DarkMode;
