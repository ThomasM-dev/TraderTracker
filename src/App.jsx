
 import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import DailyRentability from "./components/DailyRentability";
import RentSharesCrypto from "./components/RentSharesCrypto";
import RoiRent from "./components/RoiRent";
import RentabilityLongShorts from "./components/Rentability_long_shorts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Operations from "./screens/Operations";

function App() {
  return (
    <>
      <NavBar />
      <Operations/>
    </>
  );
}

export default App;