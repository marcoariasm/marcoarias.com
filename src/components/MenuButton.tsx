import { useState } from "react";
import { Close, DragHandle } from "@mui/icons-material";
import { Box, IconButton, Link, Typography } from "@mui/material";
import "./MenuButton.css";

const settings = [
  { page: "Inicio", route: "/" },
  // { page: "Acerca de mí", route: "/about" },
  // { page: "Hoja de vida", route: "/resume" },
  // { page: "Trabajos", route: "/work" },
  // { page: "Contacto", route: "/contact" },
];

const MenuButton = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  return (
    <>
      <IconButton
        onClick={() => setVisibleMenu(!visibleMenu)}
        sx={{
          p: 0,
          color: "inherit",
          right: 0,
          zIndex: 2,
          position: "absolute",
        }}
      >
        {visibleMenu ? (
          <Close sx={{ fontSize: "80px", p: 2 }} />
        ) : (
          <DragHandle sx={{ fontSize: "80px", p: 2 }} />
        )}
      </IconButton>
      {visibleMenu && (
        <Box
          sx={{
            position: "absolute",
            minWidth: "100%",
            height: "100vh",
            animation: "blur 0.8s linear forwards",
            zIndex: 1,
            color: "inherit",
            pt: 4,
            pr: 5,
            borderBottom: "1px solid inherit",
          }}
        >
          {settings.map((setting) => (
            <Link key={setting.page} href={setting.route} underline="none" sx={{ color: "inherit" }}>
              <Typography
                variant="h3"
                textAlign="right"
                color="inherit"
                lineHeight={1.5}
                sx={{ animation: "down 0.5s linear forwards" }}
              >
                {setting.page}
              </Typography>
            </Link>
          ))}
        </Box>
      )}
    </>
  );
};

export default MenuButton;
