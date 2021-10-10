import './style.css';
import { 
    House,
    Timeline,
    TrendingUp,
    Report,
    WorkOutline,
    Person, 
    AddShoppingCart,
    Message,
    Feedback,
    Email
} from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__menu">
                  <ul className="sidebar__list">
                  <h3 className="sidebar__title">Menu</h3>
                    <li className="sidebar__list__item">
                      <House className="sidebar__icon"/>
                      Home
                    </li>
                    <li className="sidebar__list__item">
                      <Timeline className="sidebar__icon" />
                      Analytics
                    </li>
                    <li className="sidebar__list__item">
                      <TrendingUp className="sidebar__icon" />
                      Sales
                    </li>
                  </ul>
                  <ul className="sidebar__list">
                  <h3 className="sidebar__title">Quick Menu</h3>
                    <li className="sidebar__list__item">
                      <Person className="sidebar__icon" />
                      Users
                    </li>
                    <li className="sidebar__list__item">
                      <AddShoppingCart className="sidebar__icon" />
                      Products
                    </li>
                    <li className="sidebar__list__item">
                      <TrendingUp className="sidebar__icon" />
                      Reports
                    </li>
                  </ul>
                  <ul className="sidebar__list">
                  <h3 className="sidebar__title">Notifications</h3>
                    <li className="sidebar__list__item">
                      <Email  className="sidebar__icon" />
                      Mail
                    </li>
                    <li className="sidebar__list__item">
                      <Feedback className="sidebar__icon" />
                      Feedback
                    </li>
                    <li className="sidebar__list__item">
                      <Message className="sidebar__icon" />
                      Messages
                    </li>
                  </ul>
                  <ul className="sidebar__list">
                  <h3 className="sidebar__title">Staff</h3>
                    <li className="sidebar__list__item">
                      <WorkOutline className="sidebar__icon" />
                      Manage
                    </li>
                    <li className="sidebar__list__item">
                      <Timeline className="sidebar__icon" />
                      Analytics
                    </li>
                    <li className="sidebar__list__item">
                      <Report className="sidebar__icon" />
                      Reports
                    </li>
                  </ul>
                </div>
            </div>          
        </div>
    )
}

export default Sidebar;