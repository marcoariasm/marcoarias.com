import React from "react";
import SocialLinks from "./SocialLinks";
import DarkMode from "./DarkMode";
import { Box } from "@mui/material";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

const Layout = ({
  mode,
  setMode,
  children,
}: {
  mode: boolean;
  setMode: (mode: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* <CssBaseline /> */}
      <Logo />
      <MenuButton />
      <SocialLinks />
      <DarkMode mode={mode} setMode={setMode} />
      {children}
    </Box>
  );
};

export default Layout;
