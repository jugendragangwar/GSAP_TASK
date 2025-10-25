import Header from "../components/Header.jsx";
import ExpertiseSection from "../components/Cards.jsx";
import HeroWithNeonEffect from "../components/Hero.jsx";
import PayoutServiceUI from "../components/Payout.jsx";
import NeonTagline from "../components/Tagline.jsx";
import SupportSection from "../components/Support.jsx";
import PaymentSimplifySection from "../components/PaymentSimplify.jsx";
import PaymentHero from "../components/Payment.jsx";
import TestimonialsCarousel from "../components/Testimonal.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <div className="min-h-screen text-white">
        <Header />

        <main>
          <ExpertiseSection />
          <NeonTagline />
          <div>
            <PayoutServiceUI />
          </div>

          <HeroWithNeonEffect />
          <SupportSection />
          <PaymentSimplifySection />
          <PaymentHero />
          <TestimonialsCarousel />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
