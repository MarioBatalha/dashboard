import './style.css';
import {NotificationsNone, ExitToApp} from '@material-ui/icons';

const Topbar = () => {
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
            <ExitToApp />
          </div>
          <img
            src="data:image/jpeg;base64,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"
            alt="profile"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
