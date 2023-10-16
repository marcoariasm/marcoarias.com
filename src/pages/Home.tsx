import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
  createTheme,
  SxProps,
  Button,
} from "@mui/material";
import person from "../static/img/Marco-Arias.jpg";
import { Variant } from "@mui/material/styles/createTypography";
import { useTranslation } from "react-i18next";

const styles = {
  buttonContained: {
    color: 'text.contrast', bgcolor: 'background.contrast',
    '&:hover': {
      backgroundColor: 'background.contrast',
      borderColor: 'background.contrast',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'inherit',
      borderColor: 'inherit',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem background.contrast',
    }
  },
  container: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center"
  },
  avatar: {
    width: 110,
    height: 110,
    mb: 3
  },
};

const Home = () => {
  const [greeting, setGreeting] = useState<string>("Hola");
  const [t] = useTranslation("global");

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
      return t("home.greetingNight");
    else if (hour >= 3 && hour < 6) return t("home.greetingMidnight");
    else if (hour >= 6 && hour < 12) return t("home.greetingMorning");
    else if (hour === 12) return t("home.greetingDay");
    else if (hour >= 13 && hour < 19) return t("home.greetingAfternoon");
    else return "Hola";
  };

  useEffect(() => {
    const greetingState = getGreeting(t);
    setGreeting(greetingState);
  }, [t]);

  return (
    <Container
      maxWidth="lg"
      sx={{ ...styles.container }}
    >
      <Grid container my={12}>
        <Grid item>
          <Avatar alt="Marco Arias" src={person} sx={{ ...styles.avatar }}
          />
          <ResponsiveHeading elements={["h5", "h3", "h2"]}>
            {greeting}{t("home.iAm")}
          </ResponsiveHeading>
          <ResponsiveHeading elements={["h4", "h2", "h1"]} sx={{ mb: 2 }}>
            <strong>{t("home.author")}</strong>
          </ResponsiveHeading>
          <ResponsiveHeading elements={["body1", "h5", "h4"]}>
            {t("home.aboutMe")}
            <span role="img" aria-label="male technologist">
              👨‍💻
            </span>
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            {t("home.whatIDo")}{t("home.specialty")}
          </ResponsiveHeading>
          <Button variant="contained" href="/contact" sx={{ ...styles.buttonContained, my: 4 }} size="large">
            {t("home.contact")}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
