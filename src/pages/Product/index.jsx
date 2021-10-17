import { useState } from 'react';
import { useHistory } from "react-router-dom";
import './style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Topbar from '../../components/Topbar';

import api from '../../data/api';
 
const Product = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [qtd, setQtd] = useState("");
  const [description, setDescription] = useState("");

  const userName = localStorage.getItem("userName");

  const history = useHistory();

  async function handleNewProduct(e) {
    e.preventDefault();

    const data = {
      title,
      price,
      qtd,
      description,      
    };

    try {
      await api.post("/product", data, {
        headers: { Authorization: userName }
      });

      history.push("/Home");
      alert("Producto criado com sucesso");
    } catch (err) {
      console.log(err);
      alert("Erro no cadastro, tente novamente");
    }
  }

  return (
    <div className="product">
      <Topbar />
      <h5>Adicionar novo producto</h5>
      <div className="form">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': {m: 1, width: '25ch'},
          }}
          noValidate
          autoComplete="off"
        >
          <div>
           
            <TextField
              id="outlined-password-input"
              label="Nome do produto"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
             <TextField
              id="outlined-password-input"
              label="Preço"
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
             <TextField
              id="outlined-password-input"
              label="Quantidade"
              type="number"
              value={qtd}
              onChange={e => setQtd(e.target.value)}
            />
             <TextField
              id="outlined-password-input"
              label="Description"
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <Button
              sx={{
                width: 500,
                maxWidth: '100%',
                marginTop: '1rem',
              }}
              variant="contained"
              id="fullWidth"
              onClick={handleNewProduct}
            >
              Adicionar
            </Button>
        </Box>
      </div>
    </div>
  );
};

export default Product;
