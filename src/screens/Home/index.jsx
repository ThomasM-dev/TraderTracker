import { Container, Row, Col } from "react-bootstrap";
import DailyRentabiliy from "../../components/DailyRentability";
import RoiRent from "../../components/RoiRent";
import Quantiy_long_shorts from "../../components/Quantiy_long_shorts";
import Rent_Long_Shorts from "../../components/Rent_Long_Shorts";
import Rent_Shares_Crypto from "../../components/Rent_Shares_Crypto";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Row className="m-4">
          <Col md={6}>
            <DailyRentabiliy />
          </Col>
          <Col md={6}>
            <Rent_Long_Shorts />
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
          <Rent_Shares_Crypto />
      </div>
    </>
  );
};

export default Home;
