import { ProductCard } from './ProductCard';

export default function ProductsSection() {
  const products = [
    {
      title: 'Handgefertigte Notizbücher',
      description:
        'Individuell gestaltete Notizbücher aus recyceltem Papier - perfekt für Schule und Alltag',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-blue-600',
    },
    {
      title: 'Öko-Schreibwaren',
      description:
        'Umweltfreundliche Stifte und Marker aus nachhaltigen Materialien für bewusste Schüler',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-green-600',
    },
    {
      title: 'Kreative Geschenksets',
      description: 'Liebevoll zusammengestellte Sets für besondere Anlässe - ideal zum Verschenken',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-purple-600',
    },
    {
      title: 'Schulplaner',
      description: 'Strukturiert durchs Schuljahr - mit unseren praktischen und stilvollen Planern',
      gradientFrom: 'from-orange-400',
      gradientTo: 'to-orange-600',
    },
    {
      title: 'Upcycling-Produkte',
      description: 'Aus Alt mach Neu - einzigartige Produkte aus upgecycelten Materialien',
      gradientFrom: 'from-pink-400',
      gradientTo: 'to-pink-600',
    },
    {
      title: 'Digitale Lerninhalte',
      description: 'Innovative digitale Produkte zur Unterstützung beim Lernen und Organisieren',
      gradientFrom: 'from-teal-400',
      gradientTo: 'to-teal-600',
    },
  ];

  return (
    <section id="produkte" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Unsere Produkte</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Entdecken Sie unsere handverlesene Auswahl an Produkten, die mit Leidenschaft und
          Kreativität entwickelt wurden
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
