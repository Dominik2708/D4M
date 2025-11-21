import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      title: 'E-Mail',
      content: 'schuelerunternehmen@bbs1.de',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '0123 / 456789',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: (
        <>
          BBS I - Berufsbildende Schulen
          <br />
          Musterstraße 123
          <br />
          12345 Musterstadt
        </>
      ),
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className={`${item.bgColor} rounded-lg p-3`}>
            <item.icon className={`w-6 h-6 ${item.iconColor}`} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
