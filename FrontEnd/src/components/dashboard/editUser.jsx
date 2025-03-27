//REDUX
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/actions/editActions";
import { getUser } from "../../redux/actions/userActions";
import MsgError from "../MsgError";

export default function EditUser() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUser()); // Charge les données utilisateur
    }
  }, [status, dispatch]);

  // Fonction pour fermer le formulaire d'édition
  const handleClose = () => {
    const editUser = document.querySelector(".editUser");
    const header = document.querySelector(".header");
    editUser.style.display = "none";
    header.style.display = "block";
    setError("");
  };

  // Fonction pour soumettre le formulaire d'édition
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim()) {
      setError("User name is required");
      return;
    }
    await dispatch(editUser({ username }));
    setUsername("");
    handleClose();
    // Recharge les données utilisateur après l'édition
    dispatch(getUser());
  };

  return (
    <>
      <div className="editUser">
        <h2>Edit user info</h2>
        <form className="field">
          <div className="editField">
            <label htmlFor="username">User name : </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {error && <MsgError error={error} />}
        </form>
        <div className="editField">
          <label htmlFor="firstname">First name : </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={data?.firstName}
            readOnly
            disabled
          />
        </div>
        <div className="editField">
          <label htmlFor="lastname">Last name : </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={data?.lastName}
            readOnly
            disabled
          />
        </div>
        <div className="button">
          <button className="editButton" onClick={handleSubmit}>
            Save
          </button>
          <button className="editButton" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
