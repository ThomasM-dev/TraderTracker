import NavBar from "./components/NavBar";
import Operations from "./screens/Operations";
import Home from "./screens/Home";
import RegistrationsOperation from "./screens/RegistrationsOperation";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useGetOperationsQuery } from "./fetching/firebaseApi";
import { setsOperations } from "./stateGlobal/operationsSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operaciones" element={<Operations />} />
        <Route path="/registrar" element={<RegistrationsOperation />} />
      </Routes>
    </>
  );
}

export default App;
