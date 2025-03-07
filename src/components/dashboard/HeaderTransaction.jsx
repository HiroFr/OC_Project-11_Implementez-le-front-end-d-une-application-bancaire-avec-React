//REDUX
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import EditUser from "./editUser";

export default function HeaderTransaction() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUser()); // Charge les données utilisateur
    }
  }, [status, dispatch]);

  const handleEdit = () => {
    const editUser = document.querySelector(".editUser");
    const header = document.querySelector(".header");
    editUser.style.display = "flex";
    header.style.display = "none";
  };

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {data?.firstName} {data?.lastName} !
        </h1>
        <button className="edit-button" onClick={handleEdit}>
          Edit Name
        </button>
      </div>
      <EditUser />
      <h2 className="sr-only">Accounts</h2>
    </>
  );
}
