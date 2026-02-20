'use client';

import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
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
            <Label htmlFor="name">{t('contact.form.name')}</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t('contact.form.namePlaceholder')}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('contact.form.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('contact.form.emailPlaceholder')}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('contact.form.message')}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t('contact.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            {t('contact.form.submit')}
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
