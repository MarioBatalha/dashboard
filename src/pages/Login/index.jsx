import './style.css';
import Auth from '../../asset/img//auth.png';

import InputWithIcon from '../../components/InputWithIcon';


const Login = () => {
    return (
        <div className="login">
           <div className="login__info">
               <img src={Auth} alt="" />
               <h4>Gerencie suas compras do jeito certo!</h4>
               <p className="login__text">Mantenha tudo o que precisa no único lugar e a distância de um click.</p>
           </div>
           <div className="login__form">
               <h1>Login</h1>
               <InputWithIcon />
           </div>
        </div>
    )
}

export default Login;