import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import MsgError from "../MsgError";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import { getUser } from "../../redux/actions/userActions";

export default function Form() {
  // Etat pour gérer les champs du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // false par défaut
  const [errorMessage, setErrorMessage] = useState("");

  // Récupère le statut d'authentification depuis le store Redux
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loginUser()); // Charge les données utilisateur
    }
  }, [status, dispatch]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {

      // Vérifie si les champs email et mot de passe sont remplis
      if (email === "" || password === "") {
        setErrorMessage("Email and password are required");
        return;
      }

      // Envoie une action pour se connecter avec les informations d'identification
      const resultAction = await dispatch(loginUser({ email, password }));
      // Vérifie si l'action a réussi
      if (loginUser.fulfilled.match(resultAction)) {
        // Si l'utilisateur a coché "Remember me"
        if (rememberMe) {
          console.log(resultAction.payload);
          // Stocke le token dans localStorage
          localStorage.setItem("token", resultAction.payload.body.token);
        } else {
          // Stocke le token dans sessionStorage
          sessionStorage.setItem("token", resultAction.payload.body.token);
        }
        navigate("/dashboard");
        dispatch(getUser());
      } else {
        // Si l'authentification échoue, affiche un message d'erreur
        setErrorMessage("Email or password incorrect");
      }
    } catch {
      setErrorMessage("An error occurred");
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" onClick={handleLogin}>
          Sign In
        </button>
      </form>
      {errorMessage && <MsgError error={errorMessage} />}
    </section>
  );
}
