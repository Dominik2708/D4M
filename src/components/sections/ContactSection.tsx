import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Kontaktieren Sie uns</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Haben Sie Fragen oder möchten Sie eine Bestellung aufgeben? Wir freuen uns auf Ihre
          Nachricht!
        </p>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
