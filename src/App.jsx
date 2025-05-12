import NavBar from "./components/NavBar";
import Operations from "./screens/Operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetOperationsQuery } from "./fetching/firebaseApi";
import { setsOperations } from "./stateGlobal/operationsSlice";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegistrationsOperation from "./screens/RegistrationsOperation";


function App() {
  const { data } = useGetOperationsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setsOperations(data));
    }
  }, [dispatch, data]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operaciones" element={<Operations />} />
        <Route path="registrar" element={<RegistrationsOperation/>}/>
      </Routes>
    </>
  );
}

export default App;
