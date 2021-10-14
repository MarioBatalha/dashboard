import './style.css';

import InputRegister from '../../components/InputRegister';


const Signup = () => {
    return (
        <div className="signup">
           <div className="signup__info">
               <h4>Seja bem-bindo a nossa comunidade</h4>
               <p className="signup__text">Cadastre-se e comece a desfrutar dos nossos planos</p>
           </div>
           <div className="signup__form">
               <h1>Registro</h1>
               <InputRegister />
           </div>
        </div>
    )
}

export default Signup;