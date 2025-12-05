import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Schülerunternehmen
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-800 mb-8 font-semibold">
            BBS I Lüneburg · HA25B
          </p>

          {/* Legal Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 text-left">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Rechtlicher Hinweis:</h2>
            <p className="text-gray-700 leading-relaxed">
              Dies ist ein Schülerunternehmen der BBS I Lüneburg (Klasse HA25B). Wir sind von der
              Mehrwertsteuer befreit und unterliegen besonderen Haftungsbestimmungen für
              Schülerunternehmen.
            </p>
          </div>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-left">
            Willkommen bei unserem innovativen Schülerunternehmen! Als kreatives Startup-Projekt der
            einjährigen Berufsfachschule Wirtschaft mit den Schwerpunkten Handel und IT entwickeln
            und produzieren wir nachhaltige Lösungen mit modernster 3D-Druck-Technologie.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2 text-lg px-8 py-3">
              Unsere Produkte
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-3">
              <Play className="w-5 h-5" />
              Quiz starten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
