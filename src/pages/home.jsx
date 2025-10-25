import Header from "../components/Header";
import ExpertiseSection from "../components/Cards";
import HeroWithNeonEffect from "../components/HeroWithNeonEffect";
import PayoutServiceUI from "../components/PayoutServiceUI";
import NeonTagline from "../components/NeonTagline";
import SupportSection from "../components/SupportSection";
import PaymentSimplifySection from "../components/PaymentSimplifySection";
import PaymentHero from "../components/PaymentsHero";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";

function Home() {
  return (
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
  );
}

export default Home;
