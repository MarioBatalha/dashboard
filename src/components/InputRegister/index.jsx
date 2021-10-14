import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputRegister = () => {
  return (
    <Box
    sx={{
      width: 500,
      maxWidth: '100%',
      margin: '2rem',
    }}
  >
    <TextField  sx={{
      marginTop: '1rem',
    }}
    fullWidth
    label="Nome completo"
    id="fullWidth" />
    <TextField 
    sx={{
      marginTop: '1rem',
    }}
    fullWidth
    label="Password"
    type="password"
    id="fullWidth" />
    <TextField 
    sx={{
      marginTop: '1rem',
    }}
    fullWidth
    label="email"
    type="email"
    id="fullWidth" />
    <TextField 
    sx={{
      marginTop: '1rem',
    }}
    fullWidth
    label="Cidade"
    id="fullWidth" />
  </Box>
  );
}

export default InputRegister;