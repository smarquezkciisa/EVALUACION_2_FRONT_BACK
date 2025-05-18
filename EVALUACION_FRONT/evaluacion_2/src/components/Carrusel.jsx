import React from 'react';
import { Box, useTheme, Fade } from '@mui/material';

// Imágenes de ejemplo para el carrusel
const images = [
  {
    label: 'Imagen 1',
    imgPath: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Nueva_Imperial_bridge.jpg',
  },
  {
    label: 'Imagen 2',
    imgPath: 'https://www.investigacion.patrimoniocultural.gob.cl/sites/www.investigacion.patrimoniocultural.gob.cl/files/2022-12/6.-_clbnaf_c0029_s01_plb0058.jpg',
  },
  {
    label: 'Imagen 3',
    imgPath: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Municipalidad_de_Chol-Chol.JPG',
  },
];

const Carrusel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [fadeIn, setFadeIn] = React.useState(true);
  const maxSteps = images.length;

  // Cambio automático cada 3 segundos con animación
  React.useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
        setFadeIn(true);
      }, 400); // Duración de la animación fade-out
    }, 3000);
    return () => clearInterval(timer);
  }, [maxSteps, activeStep]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1200,
        margin: '32px auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 0,
        bgcolor: 'transparent',
        aspectRatio: '16/9',
      }}
    >
      <Fade in={fadeIn} timeout={400}>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            minHeight: 140,
            maxHeight: { xs: '50vw', sm: 400, md: 500 },
            objectFit: 'cover',
            borderRadius: 2,
            boxShadow: theme.shadows[3],
            display: 'block',
            aspectRatio: '16/9',
          }}
          src={images[activeStep].imgPath}
          alt=""
        />
      </Fade>
    </Box>
  );
};

export default Carrusel;