import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Avatar } from "@mui/material";
import person from "../img/Marco-Arias.jpg";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [greeting, setGreeting] = useState<string>("Hola");

  const { t, i18n } = useTranslation(['translation', 'common']);

  const getGreeting = () => {
    const date = new Date();
    const hour = date.getHours();
    if ((hour >= 19 && hour < 24) || (hour >= 0 && hour < 5))
      return "Buenas noches";
    else if (hour >= 5 && hour < 12) return "Buenos días";
    else if (hour === 12) return "Buen día";
    else if (hour >= 13 && hour < 19) return "Buenas tardes";
    else return "Hola";
  };

  useEffect(() => {
    const greetingState = getGreeting();
    setGreeting(greetingState);
  }, []);

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
          <Typography variant="h2">{greeting}, soy </Typography>
          <Typography variant="h1">Marco Arias</Typography>
          <Typography variant="h5" mt={2}>
            Front End Developer{" "}
            <span role="img" aria-label="male technologist">
              👨‍💻
            </span>
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            trabajando en remoto con React, Node y Python
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
