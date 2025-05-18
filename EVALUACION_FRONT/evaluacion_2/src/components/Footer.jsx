import{Box,Typography} from '@mui/material';

//componente del footer
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1976d2', padding: '20px', textAlign: 'center' }}>
        <Typography variant="h6" color="white">
            © 2025 Municipalidad de Cholchol
        </Typography>
        </Box>
    );
}
export default Footer;