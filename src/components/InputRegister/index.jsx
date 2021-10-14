import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const InputRegister = () => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin: '2rem',
      }}
    >
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="Nome completo"
        id="fullWidth"
      />
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="email"
        type="email"
        id="fullWidth"
      />
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="Password"
        type="password"
        id="fullWidth"
      />
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="confirme a password"
        type="password"
        id="fullWidth"
      />
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="Cidade"
        id="fullWidth"
      />

      <Button
        sx={{
          width: 500,
          maxWidth: '100%',
          marginTop: '1rem',
        }}
        variant="contained"
      >
        Registro
      </Button>
    </Box>
  );
};

export default InputRegister;
