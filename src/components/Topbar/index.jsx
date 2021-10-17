import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './style.css';
import {NotificationsNone, ExitToApp, ControlPoint} from '@material-ui/icons';

const Topbar = () => {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topbar__right">
          <div className="topbar__icon__container">
            <NotificationsNone />
            <span className="topbar__icon__badge">2</span>
          </div>
          <div className="topbar__icon__container">
            <Link to="/Product">
              <ControlPoint />
            </Link>
          </div>
          <div className="topbar__icon__container" onClick={handleLogout}>
            <ExitToApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
