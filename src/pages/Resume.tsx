import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Container, Grid, Typography, Button } from '@mui/material';
import { useTranslation } from "react-i18next";
import { CloudDownload } from '@mui/icons-material';
// import { makeStyles } from "@mui/styles";
// import { useTheme } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "flex-start"
  }
}

// const useStyles = makeStyles((theme: any) => ({
//   timelineOppositeContent: {
//     [theme.breakpoints.down("md")]: {
//       maxWidth: 110,
//     },
//     // [theme.breakpoints.up("md")]: {
//     //   maxWidth: 173,
//     // },
//   }
// }));

const Resume = () => {
  const [t] = useTranslation("global");
  // const classes = useStyles();

  const onDownloadResume = () => {
    const link = document.createElement("a");
    link.href = process.env.REACT_APP_DOWNLOAD_LINK || '';
    link.setAttribute('download', "Resume");
    link.click();
  }
  return (
    <Container maxWidth="lg" sx={{ ...styles.container }}
    >
      <Grid container my={12}>
        <Grid item xs={12} mb={2} display="flex" justifyContent="space-between">
          <Typography variant="h3">{t("resume.title")}</Typography>
          <Button variant="contained" startIcon={<CloudDownload />}
            size='medium'
            sx={{
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
            }}
            onClick={onDownloadResume}
          >
            {t("resume.downloadText")}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{t("resume.extract")}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" my={2}><strong>{t("resume.subtitle1")}</strong></Typography>
          <Timeline>
            {t("resume.experiences", { returnObjects: true }).map(
              (experience: any) =>
              (
                <TimelineItem>
                  <TimelineOppositeContent sx={{
                    maxWidth: 173,
                    "@media (max-width: 900px)": {
                      maxWidth: 110,
                    },
                  }}>
                    {experience.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <strong>{experience.position}</strong><br />
                    {experience.nameCompany}<br />
                    <p>{experience.description}</p>
                    <p>{experience.technologies}</p>
                  </TimelineContent>
                </TimelineItem>
              )
            )}
          </Timeline>
        </Grid>
        <Grid item>
          <Typography variant="h5" my={2}><strong>{t("resume.subtitle2")}</strong></Typography>
          <Typography variant="body1">
            <strong>{t("resume.grade")}</strong><br />
            {t("resume.university")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="div" my={2}><strong>{t("resume.studiesCertifications")}</strong>
            <ul>
              {t("resume.studies", { returnObjects: true }).map((study: any) => {
                return (
                  <li>
                    {study.name} {study.institution} {study.date} <br />
                  </li>)
              })}
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" my={2}><strong>{t("resume.languagesTitle")}</strong>
            <ul>
              {t("resume.languages", { returnObjects: true }).map((language: any) => {
                return (
                  <li>
                    {language.language} {language.level}<br />
                  </li>)
              })}
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Resume