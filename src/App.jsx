import NavBar from "./components/NavBar";
import Operations from "./screens/Operations";
import Home from "./screens/Home";
import RegistrationsOperation from "./screens/RegistrationsOperation";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useGetOperationsQuery } from "./fetching/firebaseApi";
import { setsOperations } from "./stateGlobal/operationsSlice";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  // Obtener datos desde Firebase
  const { data: firebaseData, isSuccess } = useGetOperationsQuery();

  // Obtener datos desde localStorage
  const localOperations = JSON.parse(localStorage.getItem("operations"));

  // 1. Cargar desde localStorage al iniciar
  useEffect(() => {
    if (localOperations && Array.isArray(localOperations)) {
      dispatch(setsOperations(localOperations));
    }
  }, [dispatch]);

  // 2. Sincronizar si los datos en Firebase son distintos
  useEffect(() => {
    if (isSuccess && firebaseData && Array.isArray(firebaseData)) {
      const localString = JSON.stringify(localOperations);
      const firebaseString = JSON.stringify(firebaseData);

      if (localString !== firebaseString) {
        dispatch(setsOperations(firebaseData));
        localStorage.setItem("operations", JSON.stringify(firebaseData));
      }
    }
  }, [dispatch, firebaseData, isSuccess, localOperations]);

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
