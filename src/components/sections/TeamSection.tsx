import { TeamMember } from './TeamMember';

export default function TeamSection() {
  const teamMembers = [
    { name: 'Anna Schmidt', role: 'Geschäftsführung' },
    { name: 'Max Müller', role: 'Marketing' },
    { name: 'Lisa Weber', role: 'Produktion' },
    { name: 'Tom Fischer', role: 'Finanzen' },
    { name: 'Sarah Klein', role: 'Vertrieb' },
    { name: 'Jonas Becker', role: 'Design' },
    { name: 'Emma Wagner', role: 'Kommunikation' },
    { name: 'Leon Hoffmann', role: 'IT & Technik' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Unser Team</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Lernen Sie die kreativen Köpfe hinter unserem Schülerunternehmen kennen
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
