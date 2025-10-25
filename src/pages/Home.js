import Header from "../components/Header";
import ExpertiseSection from "../components/Cards";
import HeroWithNeonEffect from "../components/Hero";
import PayoutServiceUI from "../components/Payout";
import NeonTagline from "../components/Tagline";
import SupportSection from "../components/Support";
import PaymentSimplifySection from "../components/PaymentSimplify";
import PaymentHero from "../components/Payment";
import TestimonialsCarousel from "../components/Testimonal";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen text-white">
        <Header />
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
      </div>
    </>
  );
};

export default Home;
