import { EventCard } from './EventCard';

const events = [
  {
    title: 'Wirtschaft-Live-Messe',
    date: '18. März 2026',
    time: 'ganztägig',
    location: 'Berufsschule Niedersachsen',
    type: 'Wettbewerb',
    description:
      'Landesweite Messe der Schülerunternehmen aus ganz Niedersachsen mit ca. 20 teilnehmenden Teams. Wettbewerbe: bester Messestand, bester Imagefilm und beste Fotopräsentation der Geschäftsidee.',
  },
  {
    title: 'Summer-Sale',
    date: 'Juni 2026',
    time: 'Ende des Schuljahres',
    location: 'BBS I Lüneburg',
    type: 'Verkauf',
    description:
      'Verkauf übrig gebliebener Produkte zu reduzierten Preisen sowie extra hergestellte Sommer-Artikel wie Insektenschutz für Getränke und weitere saisonale 3D-Druck Produkte.',
  },
];

export function EventsSection() {
  return (
    <section id="termine" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kommende Termine</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Besuchen Sie uns auf unseren Veranstaltungen und Märkten und lernen Sie unsere Produkte
            persönlich kennen
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Competition Details */}
        <div className="mt-16 space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Wirtschaft-Live-Messe Ziele
            </h3>
            <p className="text-gray-700 leading-relaxed font-normal">
              Die Messe bietet den Jugendlichen die Möglichkeit, ihre Geschäftsideen und Produkte
              einer breiten Öffentlichkeit vorzustellen. Ziel der Messe ist es, unternehmerisches
              Denken und Handeln praxisnah zu fördern, wirtschaftliche Kompetenzen zu stärken und
              den Austausch zwischen Schüler/-innen, Schulen und Wirtschaft zu
              unterstützen.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Summer-Sale Besonderheiten</h3>
            <p className="text-gray-700 leading-relaxed font-normal">
              Beim Summer-Sale bieten wir nicht nur übrig gebliebene Produkte zu reduzierten Preisen
              an, sondern auch speziell für den Sommer entwickelte Artikel. Ein Highlight sind
              unsere 3D-gedruckten Insektenschutz-Lösungen für Getränke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
