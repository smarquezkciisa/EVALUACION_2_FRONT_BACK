import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, useTheme } from '@mui/material';

const Mision = () => {
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
          Nuestra Misión
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
          Nuestra misión es promover el desarrollo integral y sostenible de la comuna de Cholchol, fomentando la participación ciudadana, la equidad social y el acceso a oportunidades para todos sus habitantes. Trabajamos con compromiso y transparencia para mejorar la calidad de vida, preservar nuestro patrimonio y fortalecer la identidad local.
        </Typography>
      </Box>
      <Footer />
    </>
  );
};

export default Mision;