import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import { getUser } from "../redux/actions/userActions";

export default function Form() {
  // State react for get the email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redux
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loginUser());
    }
  }, [status, dispatch]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/dashboard");
      dispatch(getUser());
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
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" onClick={handleLogin}>
          Sign In
        </button>
      </form>
    </section>
  );
}
