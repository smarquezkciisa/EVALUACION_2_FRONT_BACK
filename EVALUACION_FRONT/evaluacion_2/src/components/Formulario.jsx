import React, { useState } from 'react';
import { Box, TextField, Button, Typography, useTheme, Paper } from '@mui/material';

const Formulario = () => {
  const theme = useTheme();
  const [values, setValues] = useState({ nombre: '', correo: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  // Validaciones simples
  const validate = () => {
    const newErrors = {};
    if (!values.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!values.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.correo)) {
      newErrors.correo = 'Correo electrónico inválido';
    }
    if (!values.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';
    return newErrors;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setEnviado(false);
    } else {
      setErrors({});
      setEnviado(true);
      // Aquí podrías enviar los datos a un backend
      setValues({ nombre: '', correo: '', mensaje: '' });
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 500,
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
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: theme.palette.primary.main,
          fontFamily: 'Roboto, sans-serif',
          letterSpacing: '.05em',
        }}
      >
        Contáctanos
      </Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
          error={!!errors.nombre}
          helperText={errors.nombre}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ bgcolor: 'white', borderRadius: 2 }}
          InputLabelProps={{ style: { fontFamily: 'Roboto, sans-serif' } }}
        />
        <TextField
          label="Correo electrónico"
          name="correo"
          value={values.correo}
          onChange={handleChange}
          error={!!errors.correo}
          helperText={errors.correo}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ bgcolor: 'white', borderRadius: 2 }}
          InputLabelProps={{ style: { fontFamily: 'Roboto, sans-serif' } }}
        />
        <TextField
          label="Mensaje"
          name="mensaje"
          value={values.mensaje}
          onChange={handleChange}
          error={!!errors.mensaje}
          helperText={errors.mensaje}
          fullWidth
          margin="normal"
          multiline
          minRows={4}
          variant="outlined"
          sx={{ bgcolor: 'white', borderRadius: 2 }}
          InputLabelProps={{ style: { fontFamily: 'Roboto, sans-serif' } }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            fontWeight: 700,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '.05em',
            borderRadius: 2,
            boxShadow: theme.shadows[2],
          }}
          fullWidth
        >
          Enviar
        </Button>
        {enviado && (
          <Typography
            sx={{
              mt: 2,
              color: theme.palette.success.main,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
            }}
          >
            ¡Mensaje enviado correctamente!
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default Formulario;