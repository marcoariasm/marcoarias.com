import React, { useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material';
import { useTranslation } from "react-i18next";
import es from "../../static/img/es.png";
import en from "../../static/img/en.png";

const LanguageSelector = () => {
  const [hideFlag, setHideFlag] = useState<boolean>();
  const [, i18n] = useTranslation("translate");

  const onClick = (e: any) => {
    i18n.changeLanguage(e.target.id);
    localStorage.setItem("lang", e.target.id);
    setHideFlag(!hideFlag);
  }

  useEffect(() => {
    if (localStorage.getItem('lang') === "en") {
      i18n.changeLanguage("en");
      setHideFlag(true);
    }
    else { 
      i18n.changeLanguage("es");
      setHideFlag(false); 
    }
  }, [i18n])

  return (
    <Box sx={{ position: 'absolute', right: 60, top: 16 }}>
      <IconButton onClick={onClick} sx={{ display: hideFlag ? '' : 'none' }} disableRipple>
        <img id="es" src={es} alt="espanol" width="50%" height="50%" />
      </IconButton>
      <IconButton onClick={onClick} sx={{ display: !hideFlag ? '' : 'none' }} disableRipple>
        <img id="en" src={en} alt="ingles" width="50%" height="50%" />
      </IconButton>
    </Box>
  )
}

export default LanguageSelector