import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h1 className="chartTitle">{title}</h1>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#7FCE06" />
          <Line type="monotone" dataKey={dataKey} stroke="red" />
          <Tooltip />
          {grid && <CartesianGrid stroke="black" strokeDasharray="5 5" />}
        </LineChart>
        
      </ResponsiveContainer>
     
    </div>
  );
}
