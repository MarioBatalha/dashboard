import './style.css';

const Board = () => {
  return (
    <div className="board">
      <span className="board__title">Quadros de vendas</span>
      <table className="board__table">
        <tr className="board__table__i">
          <th>Producto</th>
          <th>Preço</th>
          <th>Desconto</th>
        </tr>
        <tr className="board__table__item">
          <td>Keyboard</td>
          <td>AOA 27.000</td>
          <td>AOA 1200</td>
        </tr>
        <tr className="board__table__item">
          <td>Cadeira de escritório</td>
          <td>AOA 30.000</td>
          <td>AOA 1200</td>
        </tr>
        <tr className="board__table__item">
          <td>Retrato</td>
          <td>AOA 60.000</td>
          <td>AOA 3000</td>
        </tr>
        <tr className="board__table__item">
          <td>Clips</td>
          <td>AOA 2.000</td>
          <td>AOA 100</td>
        </tr>
        <tr className="board__table__item">
          <td>Keyboard</td>
          <td>AOA 27.000</td>
          <td>AOA 1200</td>
        </tr>
        <tr className="board__table__item">
          <td>Cadeira de escritório</td>
          <td>AOA 30.000</td>
          <td>AOA 1200</td>
        </tr>
        <tr className="board__table__item">
          <td>Retrato</td>
          <td>AOA 60.000</td>
          <td>AOA 3000</td>
        </tr>
        <tr className="board__table__item">
          <td>Cadeira de escritório</td>
          <td>AOA 30.000</td>
          <td>AOA 1200</td>
        </tr>
      </table>
    </div>
  );
};

export default Board;
