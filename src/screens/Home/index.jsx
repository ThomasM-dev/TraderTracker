import { Row, Col } from "react-bootstrap";
import DailyRentabiliy from "../../components/DailyRentability";
import RoiRent from "../../components/RoiRent";
import Quantiy_long_shorts from "../../components/Quantiy_long_shorts";
import Rent_Long_Shorts from "../../components/Rent_Long_Shorts";
import Quant_Shares_Crypto from "../../components/Quant_Shares_Crypto";
import UnitRent_Shares_Crypto from "../../components/UnitRent_Shares_Crypto"
const Home = () => {
  return (
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
      <Row>
        <Col>
          <Quant_Shares_Crypto />
        </Col>
      </Row>
      <Row>
        <Col>
        <UnitRent_Shares_Crypto />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
