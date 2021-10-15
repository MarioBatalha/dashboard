import {Link} from 'react-router-dom';
import './style.css';
import {
  AccountBalanceWallet,
  Timeline,
  TrendingUp,
  Cached,
  Person,
  AddShoppingCart,
} from '@material-ui/icons';
//import Product from '../../pages/Product';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <ul className="sidebar__list">
            <h3 className="sidebar__title">Menu</h3>
            <li className="sidebar__list__item">
              <AccountBalanceWallet className="sidebar__icon" />
              <Link>Carteira</Link>
            </li>
            <li className="sidebar__list__item">
              <Timeline className="sidebar__icon" />
              <Link to="/Home">Analises</Link>
            </li>
            <li className="sidebar__list__item">
              <Cached className="sidebar__icon" />
              <Link to="/Home">Transações</Link>
            </li>
          </ul>
          <ul className="sidebar__list">
            <h3 className="sidebar__title">Quick Menu</h3>
            <li className="sidebar__list__item">
              <Person className="sidebar__icon" />
              <Link to="/Home">Usuários</Link>
            </li>
            <li className="sidebar__list__item">
              <AddShoppingCart className="sidebar__icon" />
              <Link to="/Home">Produtos</Link>
            </li>
            <li className="sidebar__list__item">
              <TrendingUp className="sidebar__icon" />
              <Link to="/Home">Relatórios</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
