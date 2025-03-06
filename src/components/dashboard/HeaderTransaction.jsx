//REDUX
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/userActions";

export default function HeaderTransaction() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUser()); // Charge les données utilisateur
    }
  }, [status, dispatch]);

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {data?.firstName} {data?.lastName} !
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
    </>
  );
}
