import React, { useState, useMemo } from 'react'
import { Alert, Container, Grid, TextField, Typography, Box, CssBaseline, Button, Snackbar, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const [t] = useTranslation("global");

  const formValidationSchema = () => yup.object({
    user: yup.string().required(t('contact.form.nameRequired')),
    email: yup
      .string()
      .email(t('contact.form.emailError'))
      .required(t('contact.form.emailRequired')),
    message: yup
      .string()
      .required(t('contact.form.messageRequired')),
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const schema = useMemo(() => formValidationSchema(), [t])

  const formInitialValue = {
    user: '',
    email: '',
    message: '',
  }

  const navigate = useNavigate();
  // let form = useRef<FormInitial>(formInitialValue);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };


  const onSend = async (data: any) => {

    setOpenAlert(true);
    setSuccessMessage('Gracias será redirigido al inicio en 5 segundos');

    await fetch(`${process.env.REACT_APP_BACKEND}/contact`, {
    // await fetch(`http://localhost:4000/contact`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    navigate('/');
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "flex-start" }}
    >
      <CssBaseline />
      <Grid container spacing={3} my={12}>
        <Grid item xs={12}>
          <Typography variant="h3">{t("contact.title")}</Typography>
        </Grid>
        <Grid item sm={12} md={8}>
          {t("contact.description")}
        </Grid>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, bgcolor: "inherit", color: "inherit" },
            animation: "blur 0s linear forwards",
            '& label': {
              color: 'inherit',
            },
            '& label.Mui-focused': {
              color: 'inherit',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'inherit',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'inherit',
              },
              '&:hover fieldset': {
                borderColor: 'inherit',
                borderWidth: '0.15rem',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'inherit',
              },
            },
          }}
          noValidate
          autoComplete="off"
        >
          <Formik
            initialValues={formInitialValue}
            enableReinitialize
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
              onSend(values);
            }}
          >
            {({ values, touched, isValid, handleChange, handleBlur, errors, dirty, handleSubmit }) => (
              <Grid container px={2} my={1}>
                <Grid item sm={12} md={12}>
                  <TextField
                    fullWidth
                    required
                    id="user"
                    name="user"
                    label={t("contact.form.name")}
                    placeholder={t("contact.form.namePlaceholder")}
                    value={values.user}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.user && Boolean(errors.user)}
                    helperText={touched.user && errors.user}
                  />
                  <TextField
                    fullWidth
                    required
                    type="email"
                    id="email"
                    name="email"
                    label={t("contact.form.email")}
                    placeholder={t("contact.form.emailPlaceholder")}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    required
                    id="message"
                    name="message"
                    label={t("contact.form.message")}
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows={4}
                    multiline
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="end" my={2}>
                  <Button
                    variant='outlined'
                    type="reset"
                    size='large'
                    sx={{
                      color: 'text.primary', bgcolor: 'background.default', borderColor: 'background.contrast', mr: 2,
                      '&:hover': {
                        backgroundColor: 'background.default',
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
                  >{t("contact.form.cancel")}</Button>
                  <Button
                    type="submit"
                    variant='contained'
                    disabled={!(isValid && dirty)}
                    onClick={() => handleSubmit()}
                    size='large'
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
                      },
                      '&:disabled': {
                        backgroundColor: 'background.disabled',
                        color: 'text.disabled',
                      }
                    }}
                  >{t("contact.form.send")}</Button>
                </Grid>
              </Grid>
            )}
          </Formik>
        </Box>
        <Grid item>
          {successMessage && (
            <Card sx={{ bgColor: 'green' }}>
              {successMessage}
            </Card>
          )}
        </Grid>
        <Grid item>
          <Snackbar open={openAlert} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Thanks for your message, I'll be in touch soon! 📧
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact