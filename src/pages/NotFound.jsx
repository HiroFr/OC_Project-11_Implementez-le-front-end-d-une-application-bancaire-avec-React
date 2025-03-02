import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function NotFound() {
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
