import { Button } from '../ui/button';

export function ContactForm() {
  return (
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
  );
}
