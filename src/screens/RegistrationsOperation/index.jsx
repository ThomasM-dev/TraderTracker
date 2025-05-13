import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationsOperation.css";
import { useAddOperationMutation } from "../../fetching/firebaseApi";
import { useDispatch } from "react-redux";
import { setsOperations } from "../../stateGlobal/operationsSlice";

const RegistrationsOperation = () => {
  const dispatch = useDispatch();
  const storedOps = JSON.parse(localStorage.getItem("operations")) || [];
  const [addOperation, { isLoading, isSuccess, isError, error }] =
    useAddOperationMutation();
  const [formData, setFormData] = useState({
    activo: "",
    fecha: "",
    tipo: "Largo",
    cantidad: "",
    ganancia: "",
    roi: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOperation(formData);
    dispatch(setsOperations(formData));
    const updatedOps = [...storedOps, formData];
    localStorage.setItem("operations", JSON.stringify(updatedOps));
    setFormData({
      activo: "",
      fecha: "",
      tipo: "Largo",
      cantidad: "",
      ganancia: "",
      roi: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-white">Registrar Operación</h2>
      <form onSubmit={handleSubmit} className="row g-3 styles-inputs">
        <div className="col-md-6">
          <label className="form-label">Activo</label>
          <input
            type="text"
            className="form-control"
            name="activo"
            value={formData.activo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Tipo</label>
          <select
            className="form-select"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
          >
            <option value="Largo">Largo</option>
            <option value="Corto">Corto</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Cantidad</label>
          <input
            type="number"
            className="form-control"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Ganancia/Pérdida</label>
          <input
            type="number"
            step="any"
            className="form-control"
            name="ganancia"
            value={formData.ganancia}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">ROI (%)</label>
          <input
            type="number"
            step="any"
            className="form-control"
            name="roi"
            value={formData.roi}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Registrar Operación
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationsOperation;
