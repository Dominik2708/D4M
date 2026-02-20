import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Users, FileText, Wrench } from 'lucide-react';

interface ArchiveItem {
  title: string;
  date: string;
  type: 'project' | 'success' | 'milestone' | 'equipment';
  description: string;
  achievement?: string;
  category: string;
}

const archiveItems: ArchiveItem[] = [
  {
    title: 'Nachhaltiger Smartphone-Ständer',
    date: 'Oktober 2023',
    type: 'project',
    category: '3D-Druck',
    description: 'Entwicklung eines ergonomischen Smartphone-Ständers aus recyceltem PLA-Material',
    achievement: '1. Platz beim Schüler-Innovationswettbewerb',
  },
  {
    title: 'Holz-Technik Fusion',
    date: 'September 2023',
    type: 'project',
    category: 'Kooperation',
    description:
      'Erstes gemeinsames Projekt mit BBS II - Kombination aus 3D-gedruckten Verbindungselementen und Holzverarbeitung',
    achievement: 'Erfolgreiche Kooperationsstart',
  },
  {
    title: 'Umwelt-Workshop Serie',
    date: 'Juni 2023',
    type: 'success',
    category: 'Bildung',
    description: '5-teilige Workshop-Reihe zum Thema Mikroplastik und 3D-Druck-Alternativen',
    achievement: '45 teilnehmende Schüler',
  },
  {
    title: 'Gründung Schülerunternehmen',
    date: 'Februar 2022',
    type: 'milestone',
    category: 'Meilenstein',
    description: 'Offizielle Gründung des Schülerunternehmens an der BBS I',
    achievement: 'Grundstein für alle Folgeaktivitäten',
  },
  {
    title: 'Erste 3D-Drucker Anschaffung',
    date: 'April 2022',
    type: 'equipment',
    category: 'Ausstattung',
    description: 'Installation der ersten 3D-Drucker und Aufbau des Technikraums',
    achievement: 'Technische Grundausstattung',
  },
  {
    title: 'Prototyp-Entwicklung',
    date: 'November 2022',
    type: 'project',
    category: '3D-Druck',
    description: 'Erste eigenständige Prototypen für Alltagsgegenstände',
    achievement: 'Lernerfolg Produktentwicklung',
  },
];

const getIcon = (type: ArchiveItem['type']) => {
  switch (type) {
    case 'project':
      return FileText;
    case 'success':
      return Award;
    case 'milestone':
      return Calendar;
    case 'equipment':
      return Wrench;
    default:
      return FileText;
  }
};

const getTypeColor = (type: ArchiveItem['type']) => {
  switch (type) {
    case 'project':
      return 'bg-blue-50 text-blue-700';
    case 'success':
      return 'bg-green-50 text-green-700';
    case 'milestone':
      return 'bg-purple-50 text-purple-700';
    case 'equipment':
      return 'bg-orange-50 text-orange-700';
    default:
      return 'bg-gray-50 text-gray-700';
  }
};

export function ArchiveSection() {
  // Sort by year (most recent first)
  const sortedItems = archiveItems.sort(
    (a, b) => new Date(b.date).getFullYear() - new Date(a.date).getFullYear()
  );

  // Group by year
  const itemsByYear = sortedItems.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<number, ArchiveItem[]>);

  return (
    <section id="archive" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Archiv</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Ein Rückblick auf unsere bisherigen Projekte, Erfolge und Entwicklungen
          </p>
        </div>

        {/* Archive Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 flex-wrap">
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              Projekte
            </Badge>
            <Badge variant="outline" className="text-green-700 border-green-300">
              Erfolge
            </Badge>
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              Dokumente
            </Badge>
          </div>
        </div>

        {/* Timeline by Year */}
        {Object.entries(itemsByYear).map(([year, items]) => (
          <div key={year} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Projekte {year}</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`${getTypeColor(item.type)} rounded-lg p-2`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <Badge className={getTypeColor(item.type)}>{item.category}</Badge>
                        </div>
                        <span className="text-sm text-gray-600 font-normal">{item.date}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight text-gray-900 font-bold">{item.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>
                      {item.achievement && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                          <p className="text-gray-900 text-sm font-bold">{item.achievement}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}

        {/* Archive Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600 font-normal">
            Alle Projekte dokumentieren unseren Lernprozess und die Entwicklung unseres
            Schülerunternehmens seit der Gründung.
          </p>
        </div>
      </div>
    </section>
  );
}
