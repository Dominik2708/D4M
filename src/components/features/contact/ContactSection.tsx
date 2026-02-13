import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { DynamicLocationMap } from './DynamicLocationMap';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt & Standort</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Fragen, Ideen oder Interesse an Zusammenarbeit? Wir freuen uns auf deine
            Nachricht!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontaktformular</h3>
              <p className="text-gray-600 mb-6">
                Sende uns eine Nachricht - wir antworten in der Regel innerhalb von 2-3 Werktagen
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontaktinformationen</h3>
              <p className="text-gray-600 mb-6">Verschiedene Wege, uns zu erreichen</p>
              <ContactInfo />
            </div>

            {/* Location Map */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Lageplan & Anfahrt</h4>
              <div className="h-96">
                <DynamicLocationMap className="h-full" />
              </div>

              {/* Directions Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Anfahrt</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-medium mb-1">🚗 Mit dem Auto:</p>
                    <p>A39 Ausfahrt Lüneburg Nord, dann B216 Richtung Zentrum</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🚌 Öffentlich:</p>
                    <p>Mit Bus & Bahn zum ZOB, zu Fuß der Dahlenburger Landstraße folgen und rechts in die Straße "am Schwalbenberg" abbiegen </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
