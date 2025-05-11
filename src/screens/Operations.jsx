import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setsOperations } from "../stateGlobal/operationsSlice";

const Operations = () => {
  const dispatch = useDispatch();
  const operations = useSelector((state) => state.operations);

  useEffect(() => {
    if (data) {
        dispatch(setsOperations(data))        
    }
  }, [dispatch, data]);

  useEffect(() => {
    console.log("Operaciones en el store:", operations);
  }, [operations]);

  return (
    <div>
      <h2>Operaciones</h2>
      <ul>
        {operations.map((op) => (
          <li key={op.id}>{JSON.stringify(op)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Operations;
