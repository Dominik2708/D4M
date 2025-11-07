import { Header } from '../components/Header';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Users, Package, Calendar, Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
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

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualität garantiert</h3>
                <p className="text-gray-600">
                  Alle unsere Produkte werden mit größter Sorgfalt und unter 
                  fachkundiger Anleitung hergestellt
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teamarbeit</h3>
                <p className="text-gray-600">
                  Unser engagiertes Team arbeitet Hand in Hand, um die besten 
                  Ergebnisse zu erzielen
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vielfältiges Sortiment</h3>
                <p className="text-gray-600">
                  Von handgefertigten Artikeln bis zu digitalen Produkten - 
                  wir haben für jeden etwas dabei
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produkte" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Unsere Produkte</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Entdecken Sie unsere handverlesene Auswahl an Produkten, 
              die mit Leidenschaft und Kreativität entwickelt wurden
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Handgefertigte Notizbücher</h3>
                  <p className="text-gray-600 mb-4">
                    Individuell gestaltete Notizbücher aus recyceltem Papier - 
                    perfekt für Schule und Alltag
                  </p>
                  <Button variant="outline" className="w-full">Mehr erfahren</Button>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Öko-Schreibwaren</h3>
                  <p className="text-gray-600 mb-4">
                    Umweltfreundliche Stifte und Marker aus nachhaltigen Materialien 
                    für bewusste Schüler
                  </p>
                  <Button variant="outline" className="w-full">Mehr erfahren</Button>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Kreative Geschenksets</h3>
                  <p className="text-gray-600 mb-4">
                    Liebevoll zusammengestellte Sets für besondere Anlässe - 
                    ideal zum Verschenken
                  </p>
                  <Button variant="outline" className="w-full">Mehr erfahren</Button>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Schulplaner</h3>
                  <p className="text-gray-600 mb-4">
                    Strukturiert durchs Schuljahr - mit unseren praktischen 
                    und stilvollen Planern
                  </p>
                  <Button variant="outline" className="w-full">Mehr erfahren</Button>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Upcycling-Produkte</h3>
                  <p className="text-gray-600 mb-4">
                    Aus Alt mach Neu - einzigartige Produkte aus upgecycelten 
                    Materialien
                  </p>
                  <Button variant="outline" className="w-full">Mehr erfahren</Button>
                </div>
              </div>

              {/* Product 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Digitale Lerninhalte</h3>
                  <p className="text-gray-600 mb-4">
                    Innovative digitale Produkte zur Unterstützung beim Lernen 
                    und Organisieren
                  </p>
                  <Button variant="outline" className="w-full">Mehr erfahren</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
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

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Unser Team</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Lernen Sie die kreativen Köpfe hinter unserem Schülerunternehmen kennen
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { name: 'Anna Schmidt', role: 'Geschäftsführung' },
                { name: 'Max Müller', role: 'Marketing' },
                { name: 'Lisa Weber', role: 'Produktion' },
                { name: 'Tom Fischer', role: 'Finanzen' },
                { name: 'Sarah Klein', role: 'Vertrieb' },
                { name: 'Jonas Becker', role: 'Design' },
                { name: 'Emma Wagner', role: 'Kommunikation' },
                { name: 'Leon Hoffmann', role: 'IT & Technik' },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="termine" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Kommende Termine</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Besuchen Sie uns auf unseren Veranstaltungen und Märkten
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Schul-Weihnachtsmarkt</h3>
                    <p className="text-gray-600 mb-2">15. Dezember 2025, 14:00 - 18:00 Uhr</p>
                    <p className="text-gray-600">Aula der BBS I - Präsentieren Sie unsere Produkte</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Tag der offenen Tür</h3>
                    <p className="text-gray-600 mb-2">20. Januar 2026, 10:00 - 16:00 Uhr</p>
                    <p className="text-gray-600">BBS I - Besichtigung unserer Werkstatt</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Frühlingsmarkt</h3>
                    <p className="text-gray-600 mb-2">15. März 2026, 09:00 - 14:00 Uhr</p>
                    <p className="text-gray-600">Stadtplatz - Verkauf unserer Frühjahrskollektion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Kontaktieren Sie uns</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie eine Bestellung aufgeben? 
              Wir freuen uns auf Ihre Nachricht!
            </p>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-Mail</h3>
                    <p className="text-gray-600">schuelerunternehmen@bbs1.de</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">0123 / 456789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      BBS I - Berufsbildende Schulen<br />
                      Musterstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-Mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nachricht</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ihre Nachricht an uns..."
                    ></textarea>
                  </div>
                  <Button className="w-full">Nachricht senden</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Schülerunternehmen BBS I</h3>
                <p className="text-gray-400">
                  Von Schülern für Schüler - Innovative Produkte mit Leidenschaft entwickelt
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#produkte" className="hover:text-white">Produkte</a></li>
                  <li><a href="#ueber-uns" className="hover:text-white">Über uns</a></li>
                  <li><a href="#termine" className="hover:text-white">Termine</a></li>
                  <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
                <p className="text-gray-400">
                  Montag - Freitag: 08:00 - 14:00 Uhr<br />
                  (während der Schulzeit)
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Schülerunternehmen BBS I. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
