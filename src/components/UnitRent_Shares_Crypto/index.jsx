import { useSelector } from "react-redux"
import { ResponsiveContainer } from "recharts";

const UnitRent_Shares_Crypto = () => {
    const Operatios = useSelector((state) => state.operations )
    const reduceOperations = Operatios.reduce(([name]) =>  {

    })  
return (
    <div>
          <ResponsiveContainer>
            <h2 className="text-white text-center">Ganancia por Activo</h2>

          </ResponsiveContainer>
    </div>
)
}

export default  UnitRent_Shares_Crypto