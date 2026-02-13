import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section aria-label="Willkommen" className="min-h-screen flex items-center px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center transform -translate-y-6 md:-translate-y-8 lg:-translate-y-5">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
              Schülerunternehmen
            </span>
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-8 font-bold">
            BBS I Lüneburg · HA25B
          </p>

          {/* Legal Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12 text-left">
            <h2 className="font-bold text-gray-900 mb-2">Rechtlicher Hinweis:</h2>
            <p className="text-gray-700 leading-relaxed font-normal">
              Dies ist ein Schülerunternehmen der BBS I Lüneburg (Klasse HA25B). Wir sind von der
              Mehrwertsteuer befreit und unterliegen besonderen Haftungsbestimmungen für
              Schülerunternehmen.
            </p>
          </div>

          <p className="text-base md:text-xl lg:text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-left font-normal">
            Willkommen bei unserem innovativen Schülerunternehmen! Als kreatives Startup-Projekt der
            einjährigen Berufsfachschule Wirtschaft mit den Schwerpunkten Handel und IT entwickeln
            und produzieren wir nachhaltige Lösungen mit modernster 3D-Druck-Technologie.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="gap-2 text-lg px-8 py-3 font-normal">
              <a href="#produkte">
                Unsere Produkte
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 text-lg px-8 py-3 font-normal">
              <a href="#quiz" aria-label="Quiz starten">
                <Play className="w-5 h-5" />
                Quiz starten
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
