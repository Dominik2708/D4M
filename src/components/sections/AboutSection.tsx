import { Button } from '../ui/button';
import { ArrowRight, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Über unser Schülerunternehmen</h2>
            <p className="text-gray-600 mb-4">
              Wir sind eine Gruppe engagierter Schülerinnen und Schüler der BBS I, 
              die im Rahmen unseres Wirtschaftsunterrichts ein eigenes Unternehmen 
              gegründet haben.
            </p>
            <p className="text-gray-600 mb-4">
              Unser Ziel ist es, praktische Erfahrungen in der Geschäftswelt zu 
              sammeln und gleichzeitig innovative Produkte zu entwickeln, die unseren 
              Mitschülern und der Gemeinschaft einen Mehrwert bieten.
            </p>
            <p className="text-gray-600 mb-6">
              Durch unser Projekt lernen wir wichtige Fähigkeiten wie Teamarbeit, 
              Projektmanagement, Marketing und Kundenservice - alles in einer 
              realen Geschäftsumgebung.
            </p>
            <Button className="gap-2">
              Unser Team kennenlernen <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 h-96 flex items-center justify-center">
            <Users className="w-32 h-32 text-blue-600 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
