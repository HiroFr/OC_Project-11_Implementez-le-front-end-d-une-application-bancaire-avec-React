import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

//HOOKS
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Argent Bank - Page Not Found");

  return (
    <>
      <NavBar />
      <div className="not-found">
        <h1>404</h1>
        <p>Page non trouvé</p>
      </div>
      <Footer />
    </>
  );
}
