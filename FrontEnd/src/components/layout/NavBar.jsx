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
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUser()); // Charge les données utilisateur
    }
  }, [status, dispatch]);

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
