import './style.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {chartData} from '../../data/chart-data';

const Chart = () => {
  return (
    <div className="chart">
      <h1 className="chart__title">Análise das entradas</h1>
      <ResponsiveContainer with="100%" aspect={4 / 1}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" stroke="#000" />
          <YAxis dataKey="uv" stroke="#000" />
          <Line type="monotone" dataKey="uv" stroke="#000" />
          <Tooltip />
          <CartesianGrid stroke="#E0DFDF" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
