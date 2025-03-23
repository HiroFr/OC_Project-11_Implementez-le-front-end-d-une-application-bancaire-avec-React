//COMPONENTS
import CardTransaction from "../components/dashboard/CardTransaction";
import HeaderTransaction from "../components/dashboard/HeaderTransaction";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";

//HOOKS
import usePageTitle from "../hooks/usePageTitle";

export default function Dashboard() {
  usePageTitle("Argent Bank - Dashboard");

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <>
          <HeaderTransaction />
          <CardTransaction
            title="Argent Bank Checking (x8349)"
            amount="2,082.79"
            description="Available Balance"
          />
          <CardTransaction
            title="Argent Bank Savings (x6712)"
            amount="10,928.42"
            description="Available Balance"
          />
          <CardTransaction
            title="Argent Bank Credit Card (x8349)"
            amount="184.30"
            description="Current Balance"
          />
        </>
      </main>
      <Footer />
    </>
  );
}
