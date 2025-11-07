import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Willkommen bei unserem<br />
          <span className="text-blue-600">Schülerunternehmen</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Von Schülern für Schüler - Innovative Produkte und kreative Lösungen 
          direkt aus unserem Klassenzimmer
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="gap-2">
            Unsere Produkte entdecken <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Mehr erfahren
          </Button>
        </div>
      </div>
    </section>
  );
}
