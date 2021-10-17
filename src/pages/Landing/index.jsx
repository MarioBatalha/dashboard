import {useState} from 'react';
import './style.css';
import Car from '../../asset/img/car.png';
import House from '../../asset/img/house.png';
import Travel from '../../asset/img/travel.png';
import Footer from '../../components/Footer';

import {Link} from 'react-router-dom';

const Landing = () => {
  //const [plan, setPlan] = useState([carPlan, housePlan, travelPlan]);
  const [carPlan, setCarPlan] = useState(false);
  const [housePlan, setHousePlan] = useState(false);
  const [travelPlan, setTravelPlan] = useState(false);

  const handleReducer = (state, action) => {
    switch (action.type) {
      case carPlan:
        setCarPlan(true);
        alert('Selecionaste o plano de compra de casa');
        break;
      case housePlan:
        setHousePlan(true);
        alert('Selecionaste o plano de compra de casa');
        break;
      case travelPlan:
        setTravelPlan(true);
        alert('Selecionaste o plano de compra de casa');
        break;
      default:
        alert('O plano escolhido não existe');
    }
  };

  return (
    <>
      <nav>
        <div>
          <span className="logo">Dashboard</span>
        </div>
        <div>
          <ul className="menu__list">
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Sign-up">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <h1>
          Compre a sua casa ou carro
          <br /> com os nosso planos.
        </h1>
        <p>Escolha um plano, subescreva e desfrute dos benefícios.</p>
        <div className="plan">
          <div className="plan__item">
            <span>
              <img src={Car} alt="carro" />
            </span>
            <h2>Plano de compra de Carro</h2>
            <p className="item"> * Pagamento parcelado</p>
            <p className="item"> * Melhor custo beneficio</p>
            <p className="item"> * Pagou a primeira - Levou o producto</p>
            <button className="subescrever" /* onClick={handleReducer(plan, e => setPlan(carPlan))} */>subescrever</button>
          </div>
          <div className="plan__item">
            <span>
              <img src={House} alt="carro" />
            </span>
            <h2>Plano de compra de uma Casa</h2>
            <p className="item"> * Pagamento parcelado</p>
            <p className="item"> * Melhor custo beneficio</p>
            <p className="item"> * Pagou a primeira - Levou o producto</p>
            <button className="subescrever">subescrever</button>
          </div>
          <div className="plan__item">
            <span>
              <img src={Travel} alt="carro" />
            </span>
            <h2>Plano de Viagem</h2>
            <p className="item"> * Pagamento parcelado</p>
            <p className="item"> * Melhor custo beneficio</p>
            <p className="item"> * Pagou a primeira - Levou o producto</p>
            <button className="subescrever">subescrever</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
