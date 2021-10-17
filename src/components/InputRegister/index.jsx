import { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import api from '../../data/api';

const InputRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeat_password] = useState("");
  const [city, setCity] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
      city
    };

    try {
      const response = await api.post("/user", data);

      alert(`Registro feito com sucesso`);

      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Erro no registro, tente novamente");
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
        label="Nome completo"
        id="fullWidth"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="email"
        type="email"
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
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="confirme a password"
        type="password"
        id="fullWidth"
        value={repeat_password}
        onChange={e => setRepeat_password(e.target.value)}
      />
      <TextField
        sx={{
          marginTop: '1rem',
        }}
        fullWidth
        label="Cidade"
        id="fullWidth"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <Button
        sx={{
          width: 500,
          maxWidth: '100%',
          marginTop: '1rem',
        }}
        variant="contained"
        onClick={handleRegister}
      >
        Registro
      </Button>
    </Box>
  );
};

export default InputRegister;
