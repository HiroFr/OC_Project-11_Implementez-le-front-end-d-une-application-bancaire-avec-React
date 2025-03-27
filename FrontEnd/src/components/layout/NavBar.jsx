import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import { logoutUser } from "../../redux/slice/authSlice";

export default function NavBar() {
  let navigate = useNavigate();
  // Vérifie si l'utilisateur est authentifié
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  // Récupère les données utilisateur et le statut depuis le store Redux
  const data = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUser()); // Charge les données utilisateur
    }
  }, [status, dispatch]);

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/sign-in");
  };

  return (
    <nav className="main-nav">
      <Link to="../" className="main-nav-logo">
        {" "}
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {/* Affiche le nom d'utilisateur et le lien de déconnexion si l'utilisateur est authentifié */}
        {isAuthenticated ? (
          <>
            <Link className="main-nav-item" to="/dashboard">
              <i className="fa fa-user-circle"></i>
              {data?.userName}
            </Link>
            <Link className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          // Affiche le lien de connexion si l'utilisateur n'est pas authentifié
          <Link to="../sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  username: PropTypes.string,
};
