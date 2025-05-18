import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, useTheme } from '@mui/material';

const QuienesSomos = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: 800,
          margin: '48px auto',
          p: { xs: 3, sm: 5 },
          bgcolor: 'rgba(255,255,255,0.93)',
          borderRadius: 4,
          boxShadow: theme.shadows[6],
          border: `2px solid ${theme.palette.primary.main}`,
          textAlign: 'left',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mb: 2,
            color: theme.palette.primary.main,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '.08em',
            textShadow: '0 2px 8px #ff914d44',
          }}
        >
          ¿Quiénes Somos?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            fontSize: { xs: '1.08rem', sm: '1.18rem' },
            lineHeight: 1.8,
            fontFamily: 'Roboto, sans-serif',
            textShadow: '0 1px 4px #23252622',
          }}
        >
          Somos la Municipalidad de Cholchol, una institución comprometida con el desarrollo, la inclusión y el bienestar de nuestra comunidad. Nuestro equipo trabaja con vocación de servicio, transparencia y cercanía, promoviendo la participación ciudadana y el respeto por nuestra identidad cultural. Buscamos construir juntos una comuna más próspera, solidaria y sustentable para todas y todos.
        </Typography>
      </Box>
      <Footer />
    </>
  );
};

export default QuienesSomos;