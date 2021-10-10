import './style.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar__wrapper">
                <div className="topbar__left">
                    <span className="logo">
                        Dashboard
                    </span>
                </div>
                <div className="topbar__right">
                    <div className="topbar__icon__container">
                        <NotificationsNone />
                        <span className="topbar__icon__badge">2</span>
                    </div>
                    <div className="topbar__icon__container">
                        <Language/>
                        
                    </div>
                    <div className="topbar__icon__container">
                        <Settings />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;

