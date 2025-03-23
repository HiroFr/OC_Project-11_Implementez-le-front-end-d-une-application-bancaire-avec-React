import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";

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
