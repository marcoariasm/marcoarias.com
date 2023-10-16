import React from "react";
import { Card, Container, Grid, Typography } from "@mui/material";
import cusco from "../static/img/cusco.jpg";
import desktop from "../static/img/desktop.jpg";
import mascota from "../static/img/mascota.jpg";
import sanAndres from "../static/img/san-andres.jpg";
import marriot from "../static/img/marriot.jpg";

const About = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", minHeight: "100vh", alignItems: "center" }}
    >
      <Grid container spacing={4}>
        <Grid item lg={12} display="flex">
          <Card sx={{ width: "152px", height: "142px", mb: 8, mr: 2 }}>
            <img src={desktop} alt="me" width="152px" height="auto" />
          </Card>
          <Card sx={{ width: "150px", height: "180px", mt: 8, mr: 2 }}>
            <img src={cusco} alt="me" width="150px" height="auto" />
          </Card>
          <Card sx={{ width: "231px", height: "173px", mb: 8, mr: 2 }}>
            <img src={mascota} alt="me" width="231px" height="auto" />
          </Card>
          <Card sx={{ width: "150px", height: "200px", mt: 8, mr: 2 }}>
            <img src={sanAndres} alt="me" width="150px" height="auto" />
          </Card>
          <Card sx={{ width: "150px", height: "200px", mb: 8  }}>
            <img src={marriot} alt="me" width="150px" height="auto" />
          </Card>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Typography variant="h3">
            <strong>Acerca de mí</strong>
          </Typography>
        </Grid>
        <Grid item lg={6} sm={12} />
        <Grid item lg={6} sm={12}>
          <Typography variant="h4">
            Mi nombre es Marco Arias, vivo en Lima (GMT-5) 🇵🇪 y me gusta 
          </Typography>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Typography variant="body1">
            <p>Bienvenido a mi sitio web.</p>
            <p>Soy Ingeniero de Sistemas e Informática, me apasiona la tecnología y crear sitios web con Javascript y Python,
            bajo los patrones de diseño y código limpio.</p>
            <p>Actualmente estoy trabajando a tiempo completo pero siempre estoy
            aprendiendo y participando en comunidades de programación y
            proyectos a nivel full stack.</p>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
