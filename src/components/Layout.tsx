import React from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import MenuButton from "./MenuButton";
import SocialLinks from "./SocialLinks";
import DarkMode from "./DarkMode";

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
      <Logo />
      <LanguageSelector />
      <MenuButton />
      <SocialLinks />
      <DarkMode mode={mode} setMode={setMode} />
      {children}
    </Box>
  );
};

export default Layout;
