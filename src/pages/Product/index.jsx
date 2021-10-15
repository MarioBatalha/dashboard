import './style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Topbar from '../../components/Topbar';

const Product = () => {
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
            />
             <TextField
              id="outlined-password-input"
              label="Preço"
              type="number"
            />
             <TextField
              id="outlined-password-input"
              label="Quantidade"
              type="number"
            />
             <TextField
              id="outlined-password-input"
              label="Description"
              type="text"
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
            >
              Adicionar
            </Button>
        </Box>
      </div>
    </div>
  );
};

export default Product;
