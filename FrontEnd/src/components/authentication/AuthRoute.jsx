import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function AuthRoute({ children }) {
  // Check si l'utilisateur est authentifié
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  let navigate = useNavigate();
  useEffect(() => {
    // Rediriger l'utilisateur vers la page d'accueil s'il n'est pas authentifié
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Si l'utilisateur est authentifié, afficher le composant enfant
  return isAuthenticated ? children : null;
}
