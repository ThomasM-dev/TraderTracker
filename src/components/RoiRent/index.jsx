import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import "./RoiRent.css";
import { Cell } from "recharts";

const RoiRent = () => {
  const inversionInicial = 65;
  const operationsState = useSelector((state) => state.operations || []);

  
  const chartData = operationsState.map((operation, index) => ({
    name: `Operación ${index + 1}`, 
    ganancia: Number(operation.ganancia || 0), 
  }));

  
  const totalGanancia = operationsState.reduce(
    (acc, operation) => acc + Number(operation.ganancia || 0),
    0
  );
  const ROI = (totalGanancia / inversionInicial) * 100;

  return (
    <div className="roi mt-5 mb-3">
      <p className="roiPorcentaje">ROI: {ROI.toFixed(2)}%</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
       <XAxis dataKey="name" tick={{ fill: "#000" }} />

        <YAxis tick={{ fill: "#fff" }}/>
          <Tooltip
            contentStyle={{ backgroundColor: "#000", color: "#fff" }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend fill="#000" />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="ganancia" name="Ganacia por op" fill="#fff">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.ganancia < 0 ? "#838383" : "white"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoiRent;
