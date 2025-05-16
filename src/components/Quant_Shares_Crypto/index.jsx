import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Quant_Shares_Crypto = () => {
  const operations = useSelector((state) => state.operations);

  const grouped = operations.reduce((acc, op) => {
    const activo = op.instrumento || op.activo;
    acc[activo] = (acc[activo] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(grouped).map(([name, total]) => ({
    name,
    total,
  }));

  return (
    <ResponsiveContainer width="100%" height={300} className="p-5 mt-5 container-fluid">
      <h2 className="text-center text-white">Operaciones por Activo</h2>
      <BarChart data={data}>
       <XAxis dataKey="name" tick={{ fill: "#fff" }} />

        <YAxis tick={{ fill: "#fff" }}/>
        <Tooltip
          contentStyle={{ backgroundColor: "#000", color: "#fff" }}
          labelStyle={{ color: "#fff" }}
          itemStyle={{ color: "#fff" }}
        />
        <Bar dataKey="total" name="Cantidad ops" fill="#fff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Quant_Shares_Crypto;
