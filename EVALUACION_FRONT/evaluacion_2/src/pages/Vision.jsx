import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, useTheme } from '@mui/material';

const Vision = () => {
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
          Nuestra Visión
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
          Ser una comuna referente en desarrollo humano, inclusión y sustentabilidad, donde la identidad cultural y el bienestar de la comunidad sean pilares fundamentales. Aspiramos a construir un futuro próspero, participativo y solidario para todas y todos los habitantes de Cholchol.
        </Typography>
      </Box>
      <Footer />
    </>
  );
};

export default Vision;