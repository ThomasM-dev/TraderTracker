import { Row, Table, Container } from "react-bootstrap";
import "./Operations.css"
const Operations = () => {
  return (
    <Container className="mt-3">
      <Row>
        <h2 className="text-center text-white mb-3">Operaciones</h2>
      </Row>
      <div className="table-responsive bg-black">
        <Table striped bordered hover className="bg-black">
          <thead className="border-0">
            <tr className="style-table">
              <th>Fecha</th>
              <th>Activo</th>
              <th>Tipo</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Ganancia/Pérdida</th>
              <th>ROI (%)</th>
            </tr>
          </thead>
          <tbody className="style-table border-0">
            <tr>
              <td>2025-05-10</td>
              <td>BTC/USDT</td>
              <td>Largo</td>
              <td>0.5</td>
              <td>63000</td>
              <td>+200</td>
              <td>+0.32%</td>
            </tr>
            <tr>
              <td>2025-05-11</td>
              <td>NVDA</td>
              <td>Corto</td>
              <td>10</td>
              <td>910</td>
              <td>-150</td>
              <td>-1.61%</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Operations;
