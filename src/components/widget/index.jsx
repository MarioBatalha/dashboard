import {useState} from 'react';
import './style.css';
import user from '../../data/user';
import { DeleteOutline } from '@material-ui/icons'

const WidgetLg = () => {
  const [people, setPeople] = useState(user);

  /* const Button = ({type}) => {
    return <button className={'widget__lg__button' + type}>{type}</button>;
  }; */
  return (
    <div className="widget__lg">
      <span className="widget__lg__title">Últimas transações</span>
      <table className="widget__lg__table">
        <tr className="widget__lg__tr">
          <th className="widget__lg__th">Perfil</th>
          <th className="widget__lg__th">Cargo</th>
          <th className="widget__lg__th">Salário</th>
        </tr>
        {people.map(person => {
          const {id, image, name, title, amount} = person;
          return (
            <tr className="widget__lg__tr" key={id}>
              <td className="widget__lg__user">
                <img src={image} alt="" className="widget__lg__img" />
                <span className="widget__lg__name">{name}</span>
              </td>
              <td className="widget__lg__date">{title}</td>
              <td className="widget__lg__amount">{amount}</td>
            </tr>
          );
        })}
      </table>
      <button className="clear" onClick={() => setPeople([])}>
        Limpar a lista
        <DeleteOutline  color="red" />
      </button>
    </div>
  );
};

export default WidgetLg;
