import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import api from '../../data/api';

const InputWithIcon = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = async (e) => {
      e.preventDefault();

      try {
      const response = await api.post("/sessions", { email, password });

      localStorage.setItem("Email", response.data.email);
      localStorage.setItem("password", password);

      history.push("/Home");
      } catch (err) {
      console.log(err);
      alert("Falha no login, tente novamente.");
      }
  }
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
        label="email"
        id="fullWidth"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="Password"
        type="password"
        id="fullWidth"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Button
        sx={{
          width: 500,
          maxWidth: '100%',
          marginTop: '1rem',
        }}
        variant="contained"
        onClick={handleLogin}
      >
        Entrar
      </Button>
    </Box>
  );
};

export default InputWithIcon;
