import { Paper, Box } from '@mui/material';

const Logo = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '220px',
      width: '100%',
      mt: 3, // Margen superior para separar del elemento de arriba
    }}
  >
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 180,
        borderRadius: '50%', // Circular
        // Degradado de blanco a naranjo suave
        background: 'linear-gradient(180deg,#FFFDE4 0%,#FFD59E 100%)',
        p: 3,
        boxShadow: 4,
      }}
    >
      <Box
        component="img"
        src="https://municholchol.cl/images/1200x630/16228847/NUEVOLOGO-4qVcW1XXgD_TcQOydXqung.png"
        alt="Logo Municipalidad de Cholchol"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </Paper>
  </Box>
);

export default Logo;