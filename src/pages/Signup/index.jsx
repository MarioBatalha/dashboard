import './style.css';

import InputWithIcon from '../../components/InputWithIcon';


const Signup = () => {
    return (
        <div className="signup">
           <div className="signup__info">
               <h4>Seja bem-bindo a nossa comunidade</h4>
               <p className="signup__text">Cadastre-se e comece a desfrutar dos nossos planos</p>
           </div>
           <div className="signup__form">
               <h1>Registro</h1>
               <InputWithIcon />
           </div>
        </div>
    )
}

export default Signup;