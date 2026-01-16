import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Brain } from 'lucide-react';

const aboutPoints = [
  {
    icon: Brain,
    title: 'Design Thinking',
    description: 'Kundenorientierte Produktentwicklung durch systematische Marktforschung',
  },
  {
    icon: Award,
    title: 'Handelskompetenz',
    description: 'Vermarktung von Produkten als angehende Handelsprofis',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Offenes Team mit starker, hilfsbereiter Zusammenarbeit',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wir über uns</h2>
          <p className="text-gray-600 text-lg">
            Ein kreatives und innovatives Startup-Projekt der Klasse HA25B
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-8 text-center">
                <Users className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">BBS I Lüneburg · HA25B</h3>
                <p className="text-gray-600">Unsere Schülerfirma</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Unsere Schülerfirma ist ein kreatives und innovatives Startup-Projekt der
                Schüler/-innen der HA25B der einjährigen Berufsfachschule Wirtschaft mit den
                Schwerpunkten Handel und IT an den Berufsbildenden Schulen I Lüneburg. Wir haben uns
                auf den Bereich 3D-Druck spezialisiert und setzen unsere Ideen mit viel Motivation
                und Teamgeist in die Tat um.
              </p>
              <p>
                In einem Design-Thinking-Prozess haben wir durch Interviews mit potenziellen Kunden
                herausgefunden, welche Produkte gefragt sind – diese entwickeln und produzieren wir
                nun. Außerdem arbeiten wir in einer Kooperation mit der gewerblichen BBS II: Dort
                gefertigte Holzprodukte vermarkten wir als angehende Handelsprofis.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {aboutPoints.map((point, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-lg p-3 w-fit mx-auto mb-4">
                  <point.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Unser Ansatz und Ziel</h3>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p>
              Als Schülerunternehmen setzen wir auf Teamarbeit, Kreativität und gegenseitige
              Unterstützung. Jede Idee zählt, jeder Beitrag ist wertvoll. Wir sind ein offenes Team,
              das sich stetig weiterentwickelt und innovative Lösungen für spannende Projekte
              schafft.
            </p>
            <p className="font-semibold">
              <strong>Unser Ziel:</strong> Mit unseren Produkten einen echten Mehrwert für die
              Gemeinschaft zu bieten – und dabei Erfahrung für unsere berufliche Zukunft zu sammeln.
            </p>
            <p>
              Unsere Schülerfirma steht für Kreativität, Motivation und eine starke, hilfsbereite
              Zusammenarbeit – und wir freuen uns darauf, noch viele spannende Projekte zu
              realisieren!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
