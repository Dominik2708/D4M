'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Ihr Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ihre.email@beispiel.de"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Nachricht</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Ihre Nachricht an uns..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Nachricht senden
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
