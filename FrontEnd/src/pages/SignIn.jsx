//COMPONENTS
import Footer from "../components/layout/Footer";
import Form from "../components/login/Form";
import NavBar from "../components/layout/NavBar";

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
