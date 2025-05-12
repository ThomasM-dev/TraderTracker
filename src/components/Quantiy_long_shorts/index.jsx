import { useSelector } from "react-redux";
import "./Rentability_long_shorts.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Quantiy_long_shorts = () => {
  const operations = useSelector((state) => state.operations);

  const tiposLong = ["long", "En largo", "Largo", "largo"];
  const tiposShort = ["short", "En corto", "Corto", "corto"];

  let cantidadLong = 0;
  let cantidadShort = 0;

  operations.forEach((operation) => {
    const tipoOperacion =
      operation.tipo || operation.posición || operation.posicion;

    if (tiposLong.includes(tipoOperacion)) {
      cantidadLong++;
    } else if (tiposShort.includes(tipoOperacion)) {
      cantidadShort++;
    }
  });

  const data = [
    { name: "Operaciones Long", value: cantidadLong },
    { name: "Operaciones Short", value: cantidadShort },
  ];

  const COLORS = ["white", "#838383"];

  return (
    <div className="rentability_long_shorts mt-5 ">
      <h3 className="text-center mb-4">Cantidad de operaciones</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Quantiy_long_shorts;
