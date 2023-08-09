import React from "react";
import { KeyboardCommandKey } from "@mui/icons-material";
import { Link } from "@mui/material";

const Logo = () => {
  return (
    <Link href="/" sx={{ color: "inherit" }}>
      <KeyboardCommandKey
        sx={{ position: "absolute", m: 3, zIndex: 2, fontSize: "55px" }}
      />
    </Link>
  );
};

export default Logo;
