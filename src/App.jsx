import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import DailyRentability from "./components/DailyRentability";
import RentSharesCrypto from "./components/RentSharesCrypto";
import RoiRent from "./components/RoiRent";
import RentabilityLongShorts from "./components/Rentability_long_shorts";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Row className="m-4">
          <Col md={6}>
            <DailyRentability />
          </Col>
          <Col md={6}>
            <RentSharesCrypto />
          </Col>
        </Row>
        <Row className="m-4">
          <Col md={6}>
            <RoiRent />
          </Col>
          <Col md={6}>
            <RentabilityLongShorts />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
