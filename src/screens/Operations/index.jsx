import { Row, Table, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Operations = () => {
  const operations = useSelector((state) => state.operations);
  return (
    <Container className="mt-3">
      <Row>
        <h2 className="text-center text-white mb-3">Operaciones</h2>
      </Row>
      <div className="table-responsive bg-black">
        <Table striped bordered hover className="bg-black">
          <thead className="border-0">
            <tr className="style-table">
              <th className="bg-black text-white border-none">Activo</th>
              <th className="bg-black text-white border-none">Fecha</th>
              <th className="bg-black text-white border-none">Tipo</th>
              <th className="bg-black text-white border-none">Cantidad</th>
              <th className="bg-black text-white border-none">
                Ganancia/Pérdida
              </th>
              <th className="bg-black text-white border-none">ROI (%)</th>
            </tr>
          </thead>
          <tbody className="style-table border-0">
            {operations.map((operation) => (
              <tr key={operation.id} className="border-0">
                <td className="bg-black text-white border-0">
                  {operation.instrumento}
                </td>
                <td className="bg-black text-white border-0">
                  {operation.fecha}
                </td>
                <td className="bg-black text-white border-0">
                  {operation.tipo || operation.posición || operation.posicion}
                </td>
                <td className="bg-black text-white border-0">
                  {operation.cantidad || operation.tamaño}
                </td>
                <td className="bg-black text-white border-0">
                  {operation.ganancia}
                </td>
                <td className="bg-black text-white border-0">
                  {operation.variacion || operation.variación}%
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Operations;
