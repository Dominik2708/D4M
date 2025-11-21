import { Footer } from '@/components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { AboutSection } from '../components/sections/AboutSection';
import { TeamSection } from '../components/sections/TeamSection';
import { EventsSection } from '../components/sections/EventsSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <AboutSection />
        <TeamSection />
        <EventsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
