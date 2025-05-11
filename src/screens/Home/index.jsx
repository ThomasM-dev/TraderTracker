import { Container, Row, Col } from "react-bootstrap";
import DailyRentabiliy from "../../components/DailyRentability"
import RentSharesCrypto  from "../../components/RentSharesCrypto"
import RentabilityLongShorts from "../../components/Rentability_long_shorts"
import RoiRent from "../../components/RoiRent"
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Row className="m-4">
          <Col md={6}>
            <DailyRentabiliy />
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
};

export default Home;
