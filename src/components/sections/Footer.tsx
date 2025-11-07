export function Footer() {
  return (
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
  );
}
