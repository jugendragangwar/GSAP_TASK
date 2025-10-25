import Header from "../src/components/Header";
import ExpertiseSection from "../src/components/Cards";
import HeroWithNeonEffect from "../src/components/HeroWithNeonEffect";
import PayoutServiceUI from "../src/components/PayoutServiceUI";
import NeonTagline from "../src/components/NeonTagline";
import SupportSection from "../src/components/SupportSection";
import PaymentSimplifySection from "../src/components/PaymentSimplifySection";
import PaymentHero from "../src/components/PaymentsHero";
import TestimonialsCarousel from "../src/components/TestimonialsCarousel";
import Footer from "../src/components/Footer";

function App() {
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

export default App;
