import {
  Header,
  Footer,
  HeroSection,
  ProductsSection,
  QuizSection,
  AboutSection,
  EventsSection,
  ArchiveSection,
  ContactSection,
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProductsSection />
        <QuizSection />
        <AboutSection />
        <EventsSection />
        <ArchiveSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
