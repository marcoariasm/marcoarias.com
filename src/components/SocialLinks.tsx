import React from "react";
import { Box, IconButton } from "@mui/material";
import { GitHub, Instagram, YouTube } from "@mui/icons-material";
// import Icons from "./Icons";

// const socialAccounts = [
//   { account: "LinkedIn", link: "" }, //'https://www.linkedin.com/in/marcoantonioam'
//   { account: "GitHub", link: "#" },
//   { account: "YouTube", link: "#" },
//   { account: "Twitter", link: "#" },
// ];

const SocialLinks = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        bottom: 0,
        display: "flex",
        width: "auto",
        flexDirection: "column",
        zIndex: 2,
        fontSize: "40px",
        p: 1.5,
      }}
    >
      <IconButton>
        <GitHub />
      </IconButton>
      <IconButton>
        <YouTube />
      </IconButton>
      <IconButton>
        <Instagram />
      </IconButton>
      {/* <IconButton>
        <Facebook />
      </IconButton> */}
    </Box>
  );
};

export default SocialLinks;
