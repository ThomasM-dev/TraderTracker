import NavBar from "./components/NavBar";
import Operations from "./screens/Operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetOperationsQuery } from "./fetching/firebaseApi";
import { setsOperations } from "./stateGlobal/operationsSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </>
  );
}

export default App;
