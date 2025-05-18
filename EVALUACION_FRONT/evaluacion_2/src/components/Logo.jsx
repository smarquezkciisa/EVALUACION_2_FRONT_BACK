import { Paper, Box } from '@mui/material';

const Logo = () => (
  <Paper
    elevation={3}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 180,
      height: 180,
      borderRadius: 4,
      bgcolor: 'rgba(255,255,255,0.7)', // Blanco muy transparente
      p: 2,
      boxShadow: 4,
    }}
  >
    {/* Logo placeholder SVG */}
    <Box
      component="span"
      sx={{
        width: '80%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="36" stroke="#1976d2" strokeWidth="6" fill="none"/>
        <rect x="25" y="25" width="30" height="30" rx="6" fill="#1976d2" fillOpacity="0.5"/>
      </svg>
    </Box>
  </Paper>
);

export default Logo;