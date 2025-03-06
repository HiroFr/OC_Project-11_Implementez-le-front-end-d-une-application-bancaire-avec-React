//COMPONENTS
import Footer from "../components/Footer";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

//HOOKS
import usePageTitle from "../hooks/usePageTitle";

export default function SignIn() {
  usePageTitle("Argent Bank - Sign In");

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </>
  );
}
