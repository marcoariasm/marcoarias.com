import { useState } from "react";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { Close, DragHandle } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import "./MenuButton.css";

const MenuButton = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const [t] = useTranslation("global");

  const settings = [
    { page: t("menu.home"), route: "/" },
    { page: t("menu.resume"), route: "/resume" },
    { page: t("menu.contact"), route: "/contact" },
    // { page: t("menu.about"), route: "/about" },
    // { page: "Trabajos", route: "/work" },
  ];

  const disableScrolling = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
  }

  const enableScrolling = () => {
    window.onscroll = () => { };
  }

  return (
    <>
      <IconButton
        onClick={(e) => {
          setVisibleMenu(!visibleMenu);
          visibleMenu ? enableScrolling() : disableScrolling()
        }}
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
            minHeight: "100%",
            animation: "blur 0.8s linear forwards",
            zIndex: 1,
            color: "inherit",
            pt: 4,
            pr: 5,
            borderBottom: "1px solid inherit"
          }}
        >
          {settings.map((setting) => (
            <Typography
              key={setting.page}
              variant="h3"
              textAlign="right"
              color="inherit"
              lineHeight={1.5}
              sx={{ animation: "down 0.5s linear forwards" }}
            >
              <Link href={setting.route} underline="none" sx={{ color: "inherit", display: "inline" }}>
                {setting.page}
              </Link>
            </Typography>
          ))}
        </Box>
      )}
    </>
  );
};

export default MenuButton;
