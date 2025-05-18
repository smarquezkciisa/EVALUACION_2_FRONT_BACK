import { Box, Typography, useTheme } from '@mui/material';

const Parrafo1 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: 1105,
        margin: '48px auto',
        p: { xs: 3, sm: 5 },
        bgcolor: 'rgba(255,255,255,0.93)',
        borderRadius: 4,
        boxShadow: theme.shadows[6],
        textAlign: 'left',
        border: `2px solid ${theme.palette.primary.main}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Efecto decorativo superior */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 10,
          
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, #ff914d 100%)`,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />
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
        Apoyo municipal: 100 jóvenes de Cholchol son beneficiados con becas para sus estudios superiores
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
        El Municipio de Cholchol, liderado por el alcalde Álvaro Labraña junto al Concejo municipal, a través de su Programa de Becas Municipales, benefició este año 2025 a 100 estudiantes de educación superior, reafirmando su compromiso con el acceso equitativo a la educación y el apoyo al desarrollo académico de jóvenes de la comuna. Esta iniciativa busca aliviar la carga económica de las familias y fomentar la continuidad de estudios en instituciones técnico-profesionales y universitarias.
      </Typography>
    </Box>
  );
};

export default Parrafo1;