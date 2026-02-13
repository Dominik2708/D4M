'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init('liqnnU5AuitM3_5WT');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // validate
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Alle Felder müssen ausgefüllt werden');
      }

      // EmailJS Configuration
      const serviceId = 'service_2cggckd';
      const templateId = 'template_aw90hjc';

      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: 'D4M Team',
      };

      console.log('Sending email with params:', templateParams);
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);

      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name*</Label>
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
            <Label htmlFor="email">E-Mail*</Label>
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
            <Label htmlFor="message">Nachricht*</Label>
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

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
          </Button>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
              ✅ Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
              ❌ Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
