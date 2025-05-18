import { Box, Typography } from '@mui/material';

//componente del footer
const Footer = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                position: 'fixed',
                left: 0,
                bottom: 0,
                backgroundColor: '#1976d2',
                padding: '20px 0',
                textAlign: 'center',
                m: 0,
                zIndex: 10,
            }}
        >
            <Typography variant="h6" color="white">
                © 2025 Municipalidad de Cholchol
            </Typography>
        </Box>
    );
};

export default Footer;