import { Row, Table, Container } from "react-bootstrap";
import "./Operations.css"
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
              <th>Activo</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Cantidad</th>
              <th>Ganancia/Pérdida</th>
              <th>ROI (%)</th>
            </tr>
          </thead>
          <tbody className="style-table border-0">
            {operations.map((operation) => (
              <tr key={operation.id}>
                <td>{operation.instrumento}</td>
                <td>{operation.fecha}</td>
                <td>{operation.tipo || operation.posición || operation.posicion}</td>
                <td>{operation.cantidad || operation.tamaño}</td>
                <td>{operation.variacion || operation.variación}%</td>
                <td>{operation.ganancia}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Operations;
