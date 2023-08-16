import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
  createTheme,
  SxProps,
} from "@mui/material";
import person from "../static/img/Marco-Arias.jpg";
import { Variant } from "@mui/material/styles/createTypography";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [greeting, setGreeting] = useState<string>("Hola");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [t, i18n] = useTranslation("global");

  const ResponsiveHeading = ({
    children,
    elements,
    sx,
  }: {
    children: React.ReactNode;
    elements: Variant[];
    sx?: SxProps;
  }) => {
    const theme = createTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.only("xs"));
    const matchesSm = useMediaQuery(theme.breakpoints.only("sm"));

    let variant: Variant = elements[2];

    if (matchesXs) {
      variant = elements[0];
    } else if (matchesSm) {
      variant = elements[1];
    }

    return (
      <Typography variant={variant} sx={sx}>
        {children}
      </Typography>
    );
  };

  const getGreeting = (t: any) => {
    const date = new Date();
    const hour = date.getHours();
    if ((hour >= 19 && hour < 24) || (hour >= 0 && hour < 3))
      return t("header.greetingNight");
    else if (hour >= 3 && hour < 6) return t("header.greetingMidnight");
    else if (hour >= 6 && hour < 12) return t("header.greetingMorning");
    else if (hour === 12) return t("header.greetingDay");
    else if (hour >= 13 && hour < 19) return t("header.greetingAfternoon");
    else return "Hola";
  };

  useEffect(() => {
    const greetingState = getGreeting(t);
    setGreeting(greetingState);
  }, [t]);

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", minHeight: "100vh", alignItems: "center" }}
    >
      <Grid container>
        <Grid item>
          <Avatar
            alt="Marco Arias"
            src={person}
            sx={{ width: 110, height: 110, mb: 3 }}
          />
          <ResponsiveHeading elements={["h5", "h3", "h2"]}>
            {greeting}{t("header.iAm")}
          </ResponsiveHeading>
          <ResponsiveHeading elements={["h4", "h2", "h1"]} sx={{ mb: 2 }}>
            <strong>{t("header.author")}</strong>
          </ResponsiveHeading>
          <ResponsiveHeading elements={["body1", "h5", "h4"]}>
            {t("header.aboutMe")}
            <span role="img" aria-label="male technologist">
              👨‍💻
            </span>
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            {t("header.whatIDo")}{t("header.speciality")}
          </ResponsiveHeading>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
