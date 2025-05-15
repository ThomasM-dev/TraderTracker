import { useSelector } from "react-redux";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const Rent_Shares_Crypto = () => {
const operations = useSelector((state) => state.operations);

const groupOperations = operations.reduce((acc, op) => {
  const activo = op.instrumento || op.activo
  
  if (!acc[activo]) {
    acc[activo] = [];
  }

  acc[activo].push(op);
  return acc;
}, []);


  return (
    <ResponsiveContainer width="100%" height={300} className="p-5 mt-5">
      <BarChart width={150} height={40} data={groupOperations}>
        <Bar dataKey="uv" fill="white" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Rent_Shares_Crypto;
