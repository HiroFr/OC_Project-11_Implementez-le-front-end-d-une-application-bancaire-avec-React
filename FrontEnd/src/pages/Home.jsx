//COMPONENTS
import Banner from "../components/home/Banner";
import CardPresentation from "../components/home/CardPresentation";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";

//ICONS
import IconChat from "../assets/img/icon-chat.webp";
import IconMoney from "../assets/img/icon-money.webp";
import IconSecurity from "../assets/img/icon-security.webp";

//HOOKS
import usePageTitle from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("Argent Bank");

  return (
    <>
      <NavBar />
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <CardPresentation
            Icon={IconChat}
            Title="You are our #1 priority"
            Description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
          />
          <CardPresentation
            Icon={IconMoney}
            Title="More savings means higher rates"
            Description="The more you save with us, the higher your interest rate will be!"
          />
          <CardPresentation
            Icon={IconSecurity}
            Title="Security you can trust"
            Description="We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
