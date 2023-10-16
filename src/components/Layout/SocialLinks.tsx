import React from "react";
import { Box, IconButton, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
// import Icons from "./Icons";

// const socialAccounts = [
//   { account: "LinkedIn", link: "https://www.linkedin.com/in/marcoantonioam" }, //'https://www.linkedin.com/in/marcoantonioam'
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
        // zIndex: 2,
        fontSize: "40px",
        p: 1.5,
      }}
    >
      <IconButton disableRipple>
        <Link href="https://www.linkedin.com/in/marcoantonioam" underline="none" target="_blank" sx={{
          bgColor: 'inherit',
          color: 'inherit'
        }}>
          <LinkedIn />
        </Link>
      </IconButton>
      <IconButton disableRipple>
        <Link href="https://github.com/marcoariasm" underline="none" target="_blank" sx={{
          bgColor: 'inherit',
          color: 'inherit'
        }}>
          <GitHub />
        </Link>
      </IconButton>
      {/* <IconButton>
        <Link href="https://www.youtube.com/@MarcoAriasM/">
          <YouTube />
        </Link>
      </IconButton> */}
      {/* <IconButton>
        <Link href="https://www.facebook.com/profile.php?id=100071449549180">
          <Facebook />
        </Link>
      </IconButton> */}
    </Box>
  );
};

export default SocialLinks;
