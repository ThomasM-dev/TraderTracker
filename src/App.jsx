
 import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import DailyRentability from "./components/DailyRentability";
import RentSharesCrypto from "./components/RentSharesCrypto";
import RoiRent from "./components/RoiRent";
import RentabilityLongShorts from "./components/Rentability_long_shorts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Operations from "./screens/Operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {useGetOperationsQuery} from "./fetching/firebaseApi";
import {setsOperations} from "./stateGlobal/operationsSlice"

function App() {
  const { data } = useGetOperationsQuery();
  const dispatch = useDispatch();

    useEffect(() => {
    if (data) {
        dispatch(setsOperations(data))        
    }
  }, [dispatch, data]);



  return (
    <>
      <NavBar />
      <Operations/>
    </>
  );
}

export default App;