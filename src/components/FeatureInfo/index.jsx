import './style.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';
const FeatureInfo = () => {
  return (
    <div className="featured">
      <div className="featured__item">
        <span className="featured__title">Entrada</span>
        <div className="featured__money__container">
          <span className="featured__money">AOA 20.500 </span>
          <span className="featured__money__rate">
            -1200 <ArrowDownward className="featured__icon negative" />
          </span>
        </div>
        <span className="featured__sub">Comparação com o mês passado</span>
      </div>
      <div className="featured__item">
        <span className="featured__title">Saída</span>
        <div className="featured__money__container">
          <span className="featured__money">AOA 12.123 </span>
          <span className="featured__money__rate">
            -1200 <ArrowDownward className="featured__icon negative" />
          </span>
        </div>
        <span className="featured__sub">Comparação com o mês passado</span>
      </div>
      <div className="featured__item">
        <span className="featured__title">Custos</span>
        <div className="featured__money__container">
          <span className="featured__money">AOA 6.000 </span>
          <span className="featured__money__rate">
            -1200 <ArrowUpward className="featured__icon" />
          </span>
        </div>
        <span className="featured__sub">Comparação com o mês passado</span>
      </div>
    </div>
  );
};

export default FeatureInfo;
