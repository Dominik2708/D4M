import { EventCard } from './EventCard';

export default function EventsSection() {
  const events = [
    {
      title: 'Schul-Weihnachtsmarkt',
      date: '15. Dezember 2025, 14:00 - 18:00 Uhr',
      location: 'Aula der BBS I - Präsentieren Sie unsere Produkte',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Tag der offenen Tür',
      date: '20. Januar 2026, 10:00 - 16:00 Uhr',
      location: 'BBS I - Besichtigung unserer Werkstatt',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Frühlingsmarkt',
      date: '15. März 2026, 09:00 - 14:00 Uhr',
      location: 'Stadtplatz - Verkauf unserer Frühjahrskollektion',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section id="termine" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Kommende Termine</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Besuchen Sie uns auf unseren Veranstaltungen und Märkten
        </p>
        <div className="max-w-3xl mx-auto space-y-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
