import { Link } from "react-router";
import argentBankLogo from "../assets/img/argentBankLogo.png";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <Link to="../" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="../sign-in" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}
