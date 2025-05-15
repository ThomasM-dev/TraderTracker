import { useSelector } from "react-redux";
import "./DailyRentability.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DailyRentability = () => {
  const Operations = useSelector((state) => state.operations);

  // Agrupar operaciones por fecha
  const rentDaily = Operations.reduce((acc, op) => {
    const date = op.fecha;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(op);
    return acc;
  }, {});

  // Transformar rentDaily a array para gráfico, sumando ganancias diarias
  const chartData = Object.entries(rentDaily).map(([date, ops]) => {
    const GananciaDiaria = ops.reduce((sum, op) => sum + op.ganancia, 0);
    return { date, GananciaDiaria };
  });

  return (
    <div className="daily-rentability mt-3 mb-5">
      <h2 className="text-center">Rentabilidad Diaria</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#000", color: "#fff" }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="GananciaDiaria" fill="#fff">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.GananciaDiaria < 0 ? "#838383" : "white"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyRentability;
