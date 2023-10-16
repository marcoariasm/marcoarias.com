import React from "react";
import { Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const styles = {
  box: {
    position: "fixed",
    left: 0,
    bottom: 0,
    pb: 2,
  }
}

const DarkModeButton = ({
  mode,
  setMode,
}: {
  mode: boolean;
  setMode: (mode: boolean) => void;
}) => {
  const onChangeTheme = (newMode: boolean) => {
    setMode(!newMode);
    localStorage.setItem("darkMode", String(!newMode));
  };

  return (
    <Box sx={{ ...styles.box }}>
      <IconButton sx={{ ml: 1 }} onClick={() => onChangeTheme(mode)}>
        {mode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default DarkModeButton;
