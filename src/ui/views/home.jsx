import homeStyle from "../../assets/style/views/home.module.css";
import Hero from "./section/hero.jsx";
import CallToAction from "./section/calltoaction.jsx";
import Investment from "./section/investment.jsx";
import Quotes from "./section/quotes.jsx";
import Testimonials from "./section/testimonials.jsx";
import JoinWithUs from "./section/joinwithus.jsx";

const Home = () => {
  return (
    <main className={homeStyle.main}>
      <Hero />
      <CallToAction />
      <Investment />
      <Quotes />
      <Testimonials />
      <JoinWithUs />
    </main>
  );
};

export default Home;
