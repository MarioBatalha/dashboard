import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Person, Keyboard } from '@material-ui/icons'


const InputWithIcon = () => {
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
      label="Nome do usuário"
      id="fullWidth" />
      <TextField 
      sx={{
        marginTop: '1rem',
      }}
      fullWidth
      label="Password"
      type="password"
      id="fullWidth" />
    </Box>
  );
}

export default InputWithIcon;