import {useState} from 'react';
import './style.css';
import user from '../../data/user';

const WidgetLg = () => {
  const [people, setPeople] = useState(user);

  const Button = ({type}) => {
    return <button className={'widget__lg__button' + type}>{type}</button>;
  };
  return (
    <div className="widget__lg">
      <span className="widget__lg__title">últimas transações</span>
      <table className="widget__lg__table">
        <tr className="widget__lg__tr">
          <th className="widget__lg__th">Parceiros</th>
          <th className="widget__lg__th">Montante</th>
          <th className="widget__lg__th">Estado</th>
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
              <td className="widget__lg__status">
                <Button type="Aprovado" />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WidgetLg;
