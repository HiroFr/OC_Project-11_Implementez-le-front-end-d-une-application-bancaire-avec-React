//COMPONENTS
import Banner from "../components/Banner";
import CardPresentation from "../components/CardPresentation";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

//ICONS
import IconChat from "../assets/img/icon-chat.png";
import IconMoney from "../assets/img/icon-money.png";
import IconSecurity from "../assets/img/icon-security.png";

export default function Home() {

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
