import { Container, Row, Col } from "react-bootstrap";
import DailyRentabiliy from "../../components/DailyRentability"
import RoiRent from "../../components/RoiRent"
import Quantiy_long_shorts from "../../components/Quantiy_long_shorts";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Row className="m-4">
          <Col md={6}>
            <DailyRentabiliy />
          </Col>
          <Col md={6}>
          </Col>
        </Row>
        <Row className="m-4">
          <Col md={6}>
            <RoiRent />
          </Col>
          <Col md={6}>
            <Quantiy_long_shorts />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
