//COMPONENTS
import Footer from "../components/Footer";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

export default function SignIn() {

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
