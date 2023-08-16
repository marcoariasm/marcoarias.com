import React, { Suspense, useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import i18n from "./i18n";
import routes from "./routes";
import "./App.css";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";

function App() {
  const [mode, setMode] = React.useState<boolean>(false);

  const getDesignTokens = (mode: boolean) => ({
    palette: {
      ...(mode
        ? {
          background: {
            default: "#252b48",
          },
          text: {
            primary: "#f5f5dc",
          },
          action: {
            active: "#f5f5dc",
            selected: "#f5f5dc",
            hover: "#f5f5dc",
          },
        }
        : {
          background: {
            default: "#f5f5dc",
          },
          text: {
            primary: "#252b48",
          },
          action: {
            active: "#252b48",
            selected: "#252b48",
            hover: "#252b48",
          },
        }),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: ["Mukta", "Roboto", "sans-serif"].join(","),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    if (localStorage.getItem('darkMode') === "true") {
      setMode(true);
    }
    else setMode(false);
  }, [mode])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <I18nextProvider i18n={i18n}>
          <Layout mode={mode} setMode={setMode}>
            <Suspense fallback={<Preloader />}>
              <CssBaseline />
              <Routes>
                {routes.map((route, idx) => {
                  return (
                    route.element && (
                      <Route
                        key={idx}
                        path={route.path}
                        element={<route.element />}
                      />
                    )
                  );
                })}
              </Routes>
            </Suspense>
          </Layout>
        </I18nextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
