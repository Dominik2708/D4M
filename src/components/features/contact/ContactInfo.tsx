import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ContactItem {
  icon: typeof Mail;
  title: string;
  content: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

const contactItems: ContactItem[] = [
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

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactItems.map((item, index) => (
        <Card key={index} className="transition-shadow hover:shadow-md">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className={`${item.bgColor} rounded-lg p-3 flex-shrink-0`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <div className="text-gray-600 text-sm leading-relaxed">{item.content}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
