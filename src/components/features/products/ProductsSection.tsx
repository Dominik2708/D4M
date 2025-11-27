import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const productCategories = [
  {
    title: '3D-Drucktechnologie',
    description: 'Innovative 3D-gedruckte Lösungen für den Alltag',
    category: '3D-Produkte',
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-blue-600',
    features: [
      'Prototyping und Produktentwicklung',
      'Maßgeschneiderte Bauteile',
      'Nachhaltige Materialien (PLA, PETG)',
      'Rapid Prototyping Service',
      'Designberatung und Optimierung',
    ],
    images: [
      '/images/plastic/keychain_1.jpeg',
      '/images/plastic/keychain_2.jpeg',
      '/images/plastic/keychain_3.jpeg',
      '/images/plastic/keychain_4.jpeg',
    ],
  },
  {
    title: 'Holzverarbeitung Werkstatt',
    description: 'Traditionelle Holzverarbeitung in Kooperation mit der BBS II',
    category: 'Holzprodukte',
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-600',
    features: [
      'Möbelbau und Innenausstattung',
      'Dekorative Holzgegenstände',
      'Restaurierung und Reparaturen',
      'Nachhaltige Forstwirtschaft',
      'Handwerkliche Sonderanfertigungen',
    ],
    images: [
      '/images/wood/birdhouse_1.jpeg',
      '/images/wood/jewlerycase_1.jpeg',
      '/images/wood/keyholder_1.jpeg',
      '/images/wood/pictureframe_1.jpeg',
    ],
  },
];

export function ProductsSection() {
  return (
    <section id="produkte" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Produktbereiche</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Innovative Lösungen durch moderne Technologie und traditionelles Handwerk
          </p>
        </div>

        <div className="space-y-16">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="max-w-7xl mx-auto">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div
                  className={`inline-block bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo} text-white px-6 py-2 rounded-full mb-4`}
                >
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <Badge variant="secondary" className="mb-4 block w-fit mx-auto">
                  {category.category}
                </Badge>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Product Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Product Images */}
                <div className="grid grid-cols-2 gap-4">
                  {category.images.map((image, imageIndex) => (
                    <Card
                      key={imageIndex}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={image}
                          alt={`${category.category} Produkt ${imageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Product Features */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Unsere Leistungen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {categoryIndex === 0 && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Hinweis:</h4>
                      <p className="text-gray-700 text-sm">
                        Alle Produkte werden zu Bildungszwecken erstellt. Keine kommerziellen
                        Preisangaben verfügbar.
                      </p>
                    </div>
                  )}

                  {categoryIndex === 1 && (
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Kooperation:</h4>
                      <p className="text-gray-700 text-sm">
                        Gemeinsames Projekt mit der BBS II - Verbindung von traditionellem Handwerk
                        und moderner Technik.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
